import styled from 'styled-components'
import Box from './Box'
import { flexbox, border } from 'styled-system'

export const Flex = styled(Box)`
	${flexbox};
	${border};
	display: flex;
	gap: ${props => props?.gap};
	flex-wrap: ${props => props?.flexWrap};
`

export default Flex
