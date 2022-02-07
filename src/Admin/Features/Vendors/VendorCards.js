import React, { useState } from 'react'
import { FluidContainer, Flex, Text } from '@Components'
import styled from 'styled-components'
import { CgMore } from 'react-icons/cg'
import { AiOutlineDelete } from 'react-icons/ai'
import { HiOutlineEye } from 'react-icons/hi'
import { MdOutlineEdit } from 'react-icons/md'

const VendorCards = ({ title, phone, address }) => {
	const [extendMenu, setExtendMenu] = useState(false)
	const toggleExtendMenu = () => {
		setExtendMenu(!extendMenu)
	}
	return (
		<StyledCard>
			<Flex mb='30px'>
				<Text fontSize={5} fontWeight='bold'>
					{title}
				</Text>
				<StyledDotIcon onClick={toggleExtendMenu} />
			</Flex>
			<TextContainer>
				<Text fontSize={2} fontWeight='bold' mb='10px'>
					Phone
				</Text>
				<Text fontSize={1} color='gray' mb='30px'>
					{phone}
				</Text>
			</TextContainer>
			<TextContainer>
				<Text fontSize={2} fontWeight='bold' mb='10px'>
					Address
				</Text>
				<Text fontSize={1} color='gray'>
					{address}
				</Text>
			</TextContainer>
			{extendMenu && (
				<StyledDropDown>
					<Flex>
						<StyledViewIcon />
						<Text fontSize={3} mb='20px'>
							View
						</Text>
					</Flex>
					<Flex>
						<StyledEditIcon />
						<Text fontSize={3} mb='20px'>
							Edit
						</Text>
					</Flex>
					<Flex>
						<StyledDeleteIcon />
						<Text fontSize={3} mb='20px'>
							Delete
						</Text>
					</Flex>
				</StyledDropDown>
			)}
		</StyledCard>
	)
}

const StyledCard = styled(FluidContainer)`
  width: calc(32% - 10px);
  margin-right: 10px;
  background: #000;
  float: left;
  margin-bottom: 20px;
  color: #fff;
  padding: 20px 24px 24px;
  height: 300px;
  @media (max-width: 1278px) { {
    width: 40%;
  }
    @media (max-width: 1000px) { {
      width: 80%;
    }
`

const TextContainer = styled.div`
	top: ${props => (props.sizeLarge ? '0%' : '45%')};
`
const StyledDotIcon = styled(CgMore)`
	margin-left: calc(80% - 10px);
	font-size: 24px;

	&:hover {
		cursor: pointer;
	}

	@media (max-width: 1364px) {
		margin-left: calc(80% - 30px);
	}
`

const StyledDropDown = styled.div`
	position: relative;
	right: 0;
	background: #e0ecde;
	box-shadow: 1px 1px 7px -6px #fff;
	padding: 10px 19px 5px;
	color: #000;
	border-radius: 7px;
	width: calc(35% - 20px);
	min-width: 120px;
	left: calc(65% - 10px);
	top: calc(-53% - 10px);
`

const StyledViewIcon = styled(HiOutlineEye)`
	background-color: green;
	color: white;
	border-radius: 10px;
	font-size: 20px;
	margin-right: 5px;
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
export default VendorCards
