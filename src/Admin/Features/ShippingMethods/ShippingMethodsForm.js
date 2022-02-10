import React from 'react'
import styled from 'styled-components'
import { Button, Flex, FormInput, Text } from '@Components'
import { MdDone } from 'react-icons/md'
import FormSelectedInput from '@Admin/Components/FormSelectedInput'

const ShippingMethodsForm = () => {
	return (
		<div>
			<StyledHeader>ADD SHIPPING METHOD</StyledHeader>
			<StyledForm style>
				<FormGroupFlex flexDirection={['column', null, 'row']}>
					<FormInput label='Name' required />
					<FormSelectedInput
						label='Type'
						required
						options={[
							{ id: 1, name: 'Free Shipping' },
							{ id: 2, name: 'Flat Rate' },
							{ id: 2, name: 'Price Based' },
						]}
					/>
				</FormGroupFlex>
				<FormGroupFlex flexDirection={['column', null, 'row']}>
					<StyledInnerContainer>
						<StyledLabel>
							Zip codes<StyledAsterisk> *</StyledAsterisk>
						</StyledLabel>
						<TextArea />
					</StyledInnerContainer>
				</FormGroupFlex>
				<StyledButtonDiv>
					<Button width={['100%', null, '290px']} fontSize={3}>
						<StyledIcon />
						Save Shipping Method
					</Button>
				</StyledButtonDiv>
			</StyledForm>
		</div>
	)
}

const StyledHeader = styled(Text).attrs({
	fontSize: '22px',
	mb: '10px',
})`
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
const StyledForm = styled.form`
	margin-top: 46px;
`
const StyledIcon = styled(MdDone)`
	margin-right: 5px;
`

const FormGroupFlex = styled(Flex).attrs({
	gap: '16px',
	mb: '32px',
})`
	@media (max-width: 832px) {
		margin-bottom: 16px;
	}
`

const StyledButtonDiv = styled.div`
	display: flex;
	justify-content: center;
`
const StyledLabel = styled(Text)`
	color: #838282;
	margin-bottom: 20px;
`
const StyledAsterisk = styled.span`
	color: red;
`

const TextArea = styled.textarea`
	height: 300px;
	border: 1px solid #ced4da;
	padding: 10px;
	width: calc(100% - 10px);
	cursor: pointer;
`
const StyledInnerContainer = styled.div`
	width: 100%;
`
export default ShippingMethodsForm
