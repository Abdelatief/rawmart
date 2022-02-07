import React from 'react'
import styled from 'styled-components'
import UsersHeaderSection from '@Admin/Features/Users/UsersHeaderSection'
import UserTableSection from '@Admin/Features/Users/UserTableSection'

const Users = () => {
	return (
		<StyledDiv>
			<UsersHeaderSection />
			<UserTableSection />
		</StyledDiv>
	)
}

const StyledDiv = styled.div`
	margin: 50px 0 40px 60px;
	min-height: 100vh;
	@media (max-width: 750px) {
		justify-content: center;
	}
`

export default Users
