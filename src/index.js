import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Reset } from 'styled-reset'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import theme from './Shared/Styles/theme'
import GlobalStyles from './Shared/Styles/GlobalStyles'
import * as serviceWorker from './serviceWorker'
import 'swiper/css/bundle'

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyles />
		<Reset />
		<GlobalStyles />
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
)

serviceWorker.unregister()
