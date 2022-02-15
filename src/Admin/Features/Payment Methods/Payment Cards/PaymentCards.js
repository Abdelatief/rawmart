import React, { useState } from 'react'
import styled from 'styled-components'
import PaymentMethodsForm from '@Admin/Features/Payment Methods/PaymentMethodsForm'
import { FluidContainer, Popup, Flex, Text } from '@Components'
import { MdOutlineEdit } from 'react-icons/md'
import { AiOutlineDelete } from 'react-icons/ai'
import { CgMore } from 'react-icons/cg'

const PaymentCards = ({ paymentMethod }) => {
	const [extendMenu, setExtendMenu] = useState(false)
	const [isOpen, setIsOpen] = useState(false)
	const [Active, setActive] = useState(paymentMethod.status)

	const toggleExtendMenu = () => {
		setExtendMenu(!extendMenu)
	}
	return (
		<StyledCard>
			<StyledTitle>{paymentMethod.name}</StyledTitle>
			<Flex mb='10px'>
				<StyledDotIcon onClick={toggleExtendMenu} />
			</Flex>
			<Flex>
				<StyledImage src={paymentMethod.image_url} />
			</Flex>
			<StyledInnerContainer>
				<FormGroupFlex flexDirection={['column', null, 'row']}>
					<StyledD onClick={() => setActive(false)} borderBottomLeftRadius={true}>
						<StyledCheckBoxLabel selected={!Active}>In-Active</StyledCheckBoxLabel>
						<CheckBoxInput />
					</StyledD>
					<StyledD onClick={() => setActive(true)} borderBottomLeftRadius={false}>
						<StyledCheckBoxLabel selected={Active}>Active</StyledCheckBoxLabel>
						<CheckBoxInput />
					</StyledD>
				</FormGroupFlex>
			</StyledInnerContainer>
			{extendMenu && (
				<StyledDropDown>
					<StyledInnerFlex
						onClick={() => {
							setIsOpen(true)
						}}
					>
						<StyledEditIcon />
						<Text fontSize={3} mb='20px'>
							Edit
						</Text>
					</StyledInnerFlex>
					<StyledInnerFlex>
						<StyledDeleteIcon />
						<Text fontSize={3} mb='20px'>
							Delete
						</Text>
					</StyledInnerFlex>
				</StyledDropDown>
			)}
			<Popup isOpen={isOpen} setIsOpen={setIsOpen} minWidth='60%' height='98%' padding='30px'>
				{<PaymentMethodsForm paymentMethod={paymentMethod} title='Edit Payment Method' />}
			</Popup>
		</StyledCard>
	)
}
const StyledCard = styled(FluidContainer)`
  width: calc(50% - 15px);
  height: 207px;
  border: 1px solid #000;
  font-weight: 400;
  padding: 15px;
  @media (max-width: 1278px) { {
    width: 40%;
  }
    @media (max-width: 1000px) { {
      width: 80%;
    }
    }
`
const StyledTitle = styled(Text)`
	font-weight: 500;
	font-size: 18px;
	margin-top: 10px;
	margin-left: 10px;
`
const StyledImage = styled.img`
	width: calc(50% - 10px);
	height: 60px;
	margin-top: 20px;
	margin-bottom: 20px;
	position: relative;
`
const StyledDropDown = styled.div`
	position: relative;
	right: 0;
	background: #e0ecde;
	box-shadow: 1px 1px 7px -6px #fff;
	padding: 10px 19px 5px;
	color: #000;
	border-radius: 7px;
	width: calc(25% - 20px);
	min-width: 120px;
	left: calc(80% - 20px);
	bottom: calc(115% - 10px);
`

const StyledEditIcon = styled(MdOutlineEdit)`
	background: #5284e7;
	color: white;
	border-radius: 10px;
	font-size: 20px;
	margin-right: 5px;
`

const StyledDeleteIcon = styled(AiOutlineDelete)`
	background-color: #f78770;
	color: white;
	border-radius: 10px;
	font-size: 20px;
	margin-right: 5px;
`
const StyledDotIcon = styled(CgMore)`
	position: relative;
	margin-left: calc(100% - 20px);
	font-size: 20px;
	//left: 800px;
	margin-top: -30px;

	&:hover {
		cursor: pointer;
	}
`
const StyledInnerFlex = styled(Flex)`
	&:hover {
		cursor: pointer;
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
	width: calc(25% - 10px);
	padding: 1.5px;
	left: calc(78% - 5px);

	@media (max-width: 832px) {
		margin-bottom: 16px;
	}
`
const StyledInnerContainer = styled.div`
	width: 100%;
`
export default PaymentCards
