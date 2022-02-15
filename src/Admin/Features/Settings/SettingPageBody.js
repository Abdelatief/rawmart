import React from 'react'
import styled from 'styled-components'
import { Button, Flex, FormInput, Text } from '@Components'
import FormSelectedInput from '@Admin/Components/FormSelectedInput'
import { MdDone } from 'react-icons/md'

const SettingPageBody = () => {
	return (
		<div>
			<StyledHeader>CONTACT DETAILS</StyledHeader>
			<StyledInnerContainer>
				<StyledForm style>
					<FormGroupFlex flexDirection={['column', null, 'row']}>
						<FormInput label='Email' required />
						<FormInput label='Phone' required />
						<FormInput label='Working Hours' />
					</FormGroupFlex>
				</StyledForm>
			</StyledInnerContainer>

			<StyledHeader>SOCIAL MEDIA</StyledHeader>
			<StyledInnerContainer>
				<StyledForm style>
					<FormGroupFlex flexDirection={['column', null, 'row']}>
						<FormInput label='Twitter' />
						<FormInput label='Facebook' />
						<FormInput label='Instagram' />
					</FormGroupFlex>
				</StyledForm>
			</StyledInnerContainer>

			{/*TODO:REFACTOR ADD SEARCH DROP DOWN*/}
			<StyledHeader>EMAIL SETTINGS</StyledHeader>
			<StyledInnerContainer>
				<StyledForm style>
					<FormGroupFlex flexDirection={['column', null, 'row']}>
						<FormInput label='From Name' required />
						<FormInput label='From Email' required />
					</FormGroupFlex>
					<FormGroupFlex flexDirection={['column', null, 'row']}>
						<FormSelectedInput label='Emails (Special Order Notification)' options={[]} />
						<FormSelectedInput label='Emails (Order Placed Notification)' options={[]} />
					</FormGroupFlex>
					<FormGroupFlex flexDirection={['column', null, 'row']}>
						<FormSelectedInput label='Emails (Order cancelled Notification)' options={[]} />
					</FormGroupFlex>
				</StyledForm>
			</StyledInnerContainer>

			<StyledHeader>OTHERS</StyledHeader>
			<StyledInnerContainer>
				<StyledForm style>
					<FormGroupFlex flexDirection={['column', null, 'row']}>
						<FormInput label='Project Name' required />
						<FormSelectedInput label='Currency' required options={['EGP']} />
					</FormGroupFlex>
				</StyledForm>
			</StyledInnerContainer>

			<StyledHeader>PRODUCT SETTINGS</StyledHeader>
			<StyledInnerContainer>
				<StyledForm style>
					<FormGroupFlex flexDirection={['column', null, 'row']}>
						<StyledProductContainer>
							<StyledLabel>
								<q>
									Warranty List (Note: Please give list separate with {"'"}|{"'"}Symbol.)
								</q>
							</StyledLabel>
							<TextArea />
						</StyledProductContainer>
					</FormGroupFlex>
				</StyledForm>
			</StyledInnerContainer>
			<StyledButtonDiv>
				<Button width={['100%', null, '400px']} fontSize={2} fontWeight='bold'>
					<StyledIcon />
					Save Settings
				</Button>
			</StyledButtonDiv>
		</div>
	)
}

const StyledHeader = styled(Text).attrs({
	fontSize: '18px',
})`
	font-weight: 500;
	min-height: 50px;
`
const StyledInnerContainer = styled(Flex)`
	display: flex;
	flex-wrap: wrap;
	background-color: #fbfbfb;
	padding-bottom: 20px;
	margin-bottom: 60px;
	margin-right: 50px;
`
const FormGroupFlex = styled(Flex).attrs({
	gap: '16px',
	mb: '32px',
})`
	@media (max-width: 832px) {
		margin-bottom: 16px;
	}
`
const StyledForm = styled.form`
	margin: 46px 50px 0 50px;
	width: 100%;
`
const StyledLabel = styled(Text)`
	color: #838282;
	margin-bottom: 20px;
`

const TextArea = styled.textarea`
	height: 300px;
	border: 1px solid #ced4da;
	padding: 10px;
	width: calc(50% - 20px);
	cursor: pointer;
`
const StyledProductContainer = styled.div`
	width: 100%;
`
const StyledIcon = styled(MdDone)`
	margin-right: 5px;
`

const StyledButtonDiv = styled.div`
	display: flex;
	justify-content: center;
`

export default SettingPageBody
