import React, { useState } from 'react'
import styled from 'styled-components'
import imgBg from '../OffersCards/Assets/bg.jpg'
import OfferForm from '@Admin/Features/Offers/OfferForm'
import moment from 'moment'
import { Flex, Text, FluidContainer, Popup } from '@Components'
import { MdOutlineEdit } from 'react-icons/md'
import { AiOutlineDelete } from 'react-icons/ai'
import { CgMore } from 'react-icons/cg'

const OffersCards = ({ offer }) => {
	const [extendMenu, setExtendMenu] = useState(false)
	const [isOpen, setIsOpen] = useState(false)

	const toggleExtendMenu = () => {
		setExtendMenu(!extendMenu)
	}
	return (
		<StyledCard>
			<Flex mb='10px' width='100%'>
				<StyledDotIcon onClick={toggleExtendMenu} />
			</Flex>
			<Flex>
				<Text fontSize={5} mt='20px' ml='10px' fontWeight='bold'>
					{offer.name}
				</Text>
			</Flex>
			<Flex>
				<Text fontSize={1} mt='10px' ml='10px' mb='10px'>
					{moment(offer.start_date).format('ll')} - {moment(offer.end_date).format('ll')}
				</Text>
			</Flex>
			{extendMenu && (
				<StyledDropDown>
					<StyledInnerFlex>
						<StyledEditIcon />
						<Text
							fontSize={3}
							mb='20px'
							onClick={() => {
								setIsOpen(true)
							}}
						>
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
			<Popup isOpen={isOpen} setIsOpen={setIsOpen} padding='30px' minHeight='60%'>
				{<OfferForm offer={offer} />}
			</Popup>
		</StyledCard>
	)
}

const StyledCard = styled(FluidContainer)`
  width: calc(50% - 20px);
  height: 135px;
  font-weight: 400;
  padding: 15px;
  background: url(${imgBg});
  background-size: cover;
  color: white;
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
	background: #ffffff;
	box-shadow: 1px 1px 7px -6px #fff;
	padding: 10px 19px 5px;
	color: #000;
	border-radius: 7px;
	width: calc(20% - 20px);
	height: 80px;
	min-width: 120px;
	left: calc(79% - 10px);
	bottom: calc(96% - 10px);
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
	margin-left: calc(95% - 10px);
	font-size: 20px;

	&:hover {
		cursor: pointer;
	}
`
const StyledInnerFlex = styled(Flex)`
	&:hover {
		cursor: pointer;
	}
`

export default OffersCards
