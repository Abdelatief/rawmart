import styled from 'styled-components'
import Box from './Box'
import { flexbox, border, typography } from 'styled-system'

export const Flex = styled(Box)`
	${flexbox};
	${border};
	${typography};
	display: flex;
	gap: ${props => props?.gap};
	flex-wrap: ${props => props?.flexWrap};
`

export default Flex
