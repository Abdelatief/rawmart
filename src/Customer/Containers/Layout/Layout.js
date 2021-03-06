import styled from 'styled-components'
import Header from './Components/Header'
import Footer from './Components/Footer'

const Layout = () => {
	return (
		<StyledLayout>
			<Header />
			<StyledPageBody></StyledPageBody>
			<Footer />
		</StyledLayout>
	)
}

const StyledLayout = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
`

const StyledPageBody = styled.div`
	flex-grow: 1;
`

export default Layout
