import styled from 'styled-components'
import { typography, position, space, color, layout } from 'styled-system'

export const Text = styled.p`
	${typography};
	${position};
	${space};
	${color};
	${layout};
	text-transform: ${props => props?.textTransform};
`

export default Text
