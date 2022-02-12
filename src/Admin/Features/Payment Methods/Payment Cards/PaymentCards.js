import React, { useState } from 'react'
import { FluidContainer, Popup, Flex, Text } from '@Components'
import styled from 'styled-components'
import { MdOutlineEdit } from 'react-icons/md'
import { AiOutlineDelete } from 'react-icons/ai'
import { CgMore } from 'react-icons/cg'
import PaymentMethodsForm from '@Admin/Features/Payment Methods/PaymentMethodsForm'

const PaymentCards = ({ paymentMethod }) => {
	const [extendMenu, setExtendMenu] = useState(false)
	const [isOpen, setIsOpen] = useState(false)
	const toggleExtendMenu = () => {
		setExtendMenu(!extendMenu)
	}
	return (
		<StyledCard>
			<Flex mb='10px'>
				<StyledDotIcon onClick={toggleExtendMenu} />
			</Flex>
			<Flex>
				<StyledImage src={paymentMethod.img} />
			</Flex>
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
const StyledImage = styled.img`
	width: 100px;
	height: 100px;
	margin-right: 25px;
	bottom: 30px;
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
	bottom: calc(72% - 10px);
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

	&:hover {
		cursor: pointer;
	}
`
const StyledInnerFlex = styled(Flex)`
	&:hover {
		cursor: pointer;
	}
`

export default PaymentCards
