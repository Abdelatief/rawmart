import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PaymentMethodsForm from '@Admin/Features/Payment Methods/PaymentMethodsForm'
import { Button, Flex, Popup, Text } from '@Components'
import { VscAdd } from 'react-icons/vsc'
import { useGetOptionsQuery } from '@Admin/Redux/AdminApi'

const PaymentHeaderSection = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [live, setLive] = useState()
	const { data } = useGetOptionsQuery()
	useEffect(() => {
		if (data?.payment_mode === 'live') setLive(true)
		else setLive(false)
	}, [])
	return (
		<StyledOuterContainer>
			<StyledHeaderDiv>
				<StyledLeftContainer>
					<StyledHeader>Payment Methods</StyledHeader>
				</StyledLeftContainer>
				<StyledRightContainer>
					<Button
						variant='tertiary'
						mt='-20px'
						minWidth={null}
						width='250px'
						fontSize={3}
						onClick={() => {
							setIsOpen(true)
						}}
					>
						<Text fontSize={2}>
							<VscAdd fontSize='15px' mr='5px' />
							Add Payment Method
						</Text>
					</Button>
				</StyledRightContainer>
			</StyledHeaderDiv>
			<StyledInnerContainer>
				<FormGroupFlex flexDirection={['column', null, 'row']}>
					<StyledD onClick={() => setLive(false)} borderBottomLeftRadius={true}>
						<StyledCheckBoxLabel selected={!live}>Sandbox</StyledCheckBoxLabel>
						<CheckBoxInput />
					</StyledD>
					<StyledD onClick={() => setLive(true)} borderBottomLeftRadius={false}>
						<StyledCheckBoxLabel selected={live}>Live</StyledCheckBoxLabel>
						<CheckBoxInput />
					</StyledD>
				</FormGroupFlex>
			</StyledInnerContainer>
			<Popup isOpen={isOpen} setIsOpen={setIsOpen} minHeight='80%' width='70%' padding='30px' overflow='auto'>
				{<PaymentMethodsForm title='ADD PAYMENT METHOD' />}
			</Popup>
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
	flex: 0.5%;
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

const StyledD = styled.div`
	display: flex;
	justify-content: center;
	position: relative;
	cursor: pointer;
	line-height: 24px;
	background-attachment: scroll;
	background-color: rgb(242, 242, 242);
	width: 80px;
	height: 30px;
	color: rgb(33, 37, 41);
`

const StyledCheckBoxLabel = styled.label`
	cursor: pointer;
	color: ${props => (props.selected ? 'rgb(247, 135, 112)' : '#686868')};
	background-color: ${props => (props.selected ? 'white' : 'transport')};
	border-radius: 2px;
	margin: 3px;
	width: 95%;
	height: 85%;
	text-align: center;
`

const CheckBoxInput = styled.input.attrs({
	type: 'radio',
	boxSizing: 'border-box',
})`
	position: absolute;
	opacity: 0;
	cursor: pointer;
	left: 0;
	width: 20px;
	height: 20px;
`

const FormGroupFlex = styled(Flex).attrs({
	mb: '32px',
})`
	position: relative;
	background-color: rgb(242, 242, 242);
	border-radius: 5px;
	width: calc(10% - 5px);
	padding: 1.5px;
	left: calc(78% - 5px);

	@media (max-width: 832px) {
		margin-bottom: 16px;
	}
`
const StyledInnerContainer = styled.div`
	width: 100%;
`
export default PaymentHeaderSection
