import React, { useState } from 'react'
import styled from 'styled-components'
import { Flex, Text, FluidContainer } from '@Components'
import { MdOutlineEdit } from 'react-icons/md'
import { AiOutlineDelete } from 'react-icons/ai'
import { CgMore } from 'react-icons/cg'

const CategoryCards = ({ title, image }) => {
	const [extendMenu, setExtendMenu] = useState(false)
	const toggleExtendMenu = () => {
		setExtendMenu(!extendMenu)
	}
	return (
		<StyledCard>
			<Flex mb='10px' ml='750px'>
				<StyledDotIcon onClick={toggleExtendMenu} />
			</Flex>
			<Flex>
				<StyledImage src={image} />
				<Text fontSize={4} mb='20px'>
					{title}
				</Text>
			</Flex>
			{extendMenu && (
				<StyledDropDown>
					<StyledInnerFlex>
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
		</StyledCard>
	)
}
const StyledCard = styled(FluidContainer)`
  width: calc(49.5% - 10px);
  height: 130px;
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
	left: calc(75% - 10px);
	bottom: calc(125% - 10px);
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
	margin-left: calc(80% - 60px);
	font-size: 20px;

	&:hover {
		cursor: pointer;
	}

	@media (max-width: 1364px) {
		margin-left: calc(80% - 30px);
	}
`
const StyledInnerFlex = styled(Flex)`
	&:hover {
		cursor: pointer;
	}
`
export default CategoryCards
