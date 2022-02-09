import React from 'react'
import styled from 'styled-components'
import { Flex, Text } from '@Components'
import SelectedInput from '@Admin/Components/SelectedInput'

const BannerSection = () => {
	return (
		<StyledDiv>
			<StyledHeader>BANNER SECTION</StyledHeader>
			<FormGroupFlex flexDirection={['column', null, 'row']}>
				<StyledLabel>Language</StyledLabel>
				<StyledSelectedInput
					width='800px'
					options={[{ name: 'English' }, { name: 'Arabic' }]}
					label='Select Language'
					sizeLarge={false}
				/>
			</FormGroupFlex>

			<FormGroupFlex flexDirection={['column', null, 'row']}>
				<StyledLabel>Select Type</StyledLabel>
				<StyledSelectedInput
					width='1500px'
					options={[{ name: 'Banner' }, { name: 'Slider' }]}
					label='Select Type'
					sizeLarge={true}
				/>
			</FormGroupFlex>
		</StyledDiv>
	)
}
const StyledDiv = styled.div`
	margin: 40px 0 20px 30px;
	width: 100%;
`
const StyledHeader = styled(Text).attrs({
	fontSize: '18px',
})`
	font-weight: 500;
	line-height: 1.2;
	margin-bottom: 20px;
	color: #212529;
`
const FormGroupFlex = styled(Flex).attrs({
	gap: '16px',
	mb: '32px',
})`
	display: block;
	@media (max-width: 832px) {
		margin-bottom: 16px;
	}
`
const StyledSelectedInput = styled(SelectedInput)`
	color: #838282;
	border: 1px solid black;
	min-height: 55px;
	font-size: 14px;
	width: ${props => (props.sizeLarge ? 'calc(100% - 20px)' : 'calc(80% - 20px)')};
	//transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;

	&:hover {
		border: 1px solid #ced4da;
	}

	@media (max-width: 750px) {
		width: calc(100% - 20px);
	}
`
const StyledLabel = styled(Text)`
	color: #838282;
	margin-bottom: 20px;
`

export default BannerSection
