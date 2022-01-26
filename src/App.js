import React from 'react'
import styled from 'styled-components'
import { typography } from 'styled-system'


function App() {
	return (
		<div>
			<Header fontSize={8}>Rawmart app</Header>
		</div>
	)
}

const Header = styled.h1`
  ${typography};
  color: ${props => props.theme.colors.text.black};
`

export default App
