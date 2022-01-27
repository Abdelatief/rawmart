import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { store } from '@Redux/store'
import { Provider } from 'react-redux'
import { Reset } from 'styled-reset'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import theme from './Shared/Styles/theme'
import GlobalStyles from './Shared/Styles/GlobalStyles'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyles />
		<Provider store={store}>
			<Reset />
			<GlobalStyles />
			<ThemeProvider theme={theme}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</ThemeProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)

serviceWorker.unregister()
