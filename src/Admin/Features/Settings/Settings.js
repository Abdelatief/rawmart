import React from 'react'
import styled from 'styled-components'
import SettingsPageHeader from '@Admin/Features/Settings/SettingsPageHeader'
import SettingPageBody from '@Admin/Features/Settings/SettingPageBody'

const Settings = () => {
	return (
		<StyledDiv>
			<SettingsPageHeader />
			<SettingPageBody />
		</StyledDiv>
	)
}

const StyledDiv = styled.div`
	margin: 50px -20px 40px 30px;
	min-height: 100vh;
	@media (max-width: 750px) {
		justify-content: center;
	}
`

export default Settings
