import { createGlobalStyle } from 'styled-components'
import KageFreebiesBlack from '../Assets/fonts/kage-freebies/KageFreebiesBlack.otf'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'KageFreebiesBlack';
    	src: url(${KageFreebiesBlack});
  }
	
	* {
		box-sizing: border-box;
		transition: 300ms ease-in-out;
	}
`

export default GlobalStyles
