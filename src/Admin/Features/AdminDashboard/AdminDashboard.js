import Layout from '@Admin/Containers/Layout/Layout'
import styled from 'styled-components'
import { Text } from '@Components'

const AdminDashboard = () => {
	return (
		<StyledDiv>
			<Layout />
			<StyledContainer>
				<Text fontFamily='Jost-Bold' fontSize={5}>
					Analytics Overview
				</Text>
			</StyledContainer>
		</StyledDiv>
	)
}
const StyledDiv = styled.div`
	display: block;
	position: relative;
`
const StyledContainer = styled.div`
	display: flex;
	position: absolute;
	margin: 20px;
	left: 200px;
	top: 100px;
`

export default AdminDashboard
