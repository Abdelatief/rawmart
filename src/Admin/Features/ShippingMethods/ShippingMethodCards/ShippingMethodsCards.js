import React, { useState } from 'react'
import { Text, Flex, FluidContainer } from '@Components'
import styled from 'styled-components'
import { MdOutlineEdit } from 'react-icons/md'
import { AiOutlineDelete } from 'react-icons/ai'
import { CgMore } from 'react-icons/cg'
import ShippingMethodsForm from '@Admin/Features/ShippingMethods/ShippingMethodsForm'
import { useDeleteShippingMethodMutation } from '@Admin/Redux/AdminApi'

const ShippingMethodsCards = ({ shippingMethod }) => {
	const [extendMenu, setExtendMenu] = useState(false)
	const [isOpen, setIsOpen] = useState(false)
	const [deleteShippingMethod] = useDeleteShippingMethodMutation()

	const toggleExtendMenu = () => {
		setExtendMenu(!extendMenu)
	}
	return (
		<StyledCard>
			<StyledDotIcon onClick={toggleExtendMenu} />

			<StyledTitle fontSize={4}>{shippingMethod.name}</StyledTitle>
			<Text fontSize={1}>{shippingMethod.shipping_method}</Text>
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
					<StyledInnerFlex onClick={() => deleteShippingMethod(shippingMethod.id)}>
						<StyledDeleteIcon />
						<Text fontSize={3} mb='20px'>
							Delete
						</Text>
					</StyledInnerFlex>
				</StyledDropDown>
			)}

			{isOpen && shippingMethod && (
				<ShippingMethodsForm
					title='EDIT SHIPPING METHOD'
					shippingMethod={shippingMethod}
					isOpen={isOpen}
					setIsOpen={setIsOpen}
				/>
			)}
		</StyledCard>
	)
}
const StyledCard = styled(FluidContainer)`
  width: calc(49.5% - 10px);
  height: 120px;
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

const StyledDropDown = styled.div`
	position: relative;
	right: 0;
	background: #000000;
	box-shadow: 1px 1px 7px -6px #fff;
	padding: 10px 19px 0;
	color: #ffffff;
	border-radius: 7px;
	width: calc(25% - 20px);
	min-width: 120px;
	left: calc(75.5% - 10px);
	bottom: calc(100% - 15px);
`

const StyledEditIcon = styled(MdOutlineEdit)`
	background: #5284e7;
	color: white;
	border-radius: 8px;
	font-size: 20px;
	margin-right: 5px;
	padding: 1px;
`

const StyledDeleteIcon = styled(AiOutlineDelete)`
	background-color: #f78770;
	color: white;
	border-radius: 8px;
	font-size: 20px;
	margin-right: 5px;
	padding: 1px;
`
const StyledDotIcon = styled(CgMore)`
	margin-left: calc(98% - 25px);
	margin-bottom: 7px;
	font-size: 18px;

	&:hover {
		cursor: pointer;
	}
`
const StyledInnerFlex = styled(Flex)`
	&:hover {
		cursor: pointer;
	}
`
const StyledTitle = styled(Text)`
	font-weight: 500;
	margin-top: -30px;
	margin-bottom: 52px;
	color: rgb(30, 30, 30);
`

export default ShippingMethodsCards
