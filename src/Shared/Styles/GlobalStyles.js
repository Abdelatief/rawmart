import { createGlobalStyle } from 'styled-components'
import KageFreebiesBlack from '../Assets/fonts/kage-freebies/KageFreebiesBlack.otf'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'KageFreebiesBlack';
    	src: url(${KageFreebiesBlack});
  }
  
  html, body {
    height: 100%;
  }
  
  #root {
    height: 100%;
  }
	
  input, body {
    font-family: Jost, sans-serif;
    font-weight: 400;
  }
  
	* {
		box-sizing: border-box;
		//transition: 300ms ease-in-out;
	}
`

export default GlobalStyles
