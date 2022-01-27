import styled from 'styled-components'
import { color } from 'styled-system'

export const FluidContainer = ({ children, ...props }) => {
	return (
		<StyledFluidContainer {...props}>
			<StyledContent>{children}</StyledContent>
		</StyledFluidContainer>
	)
}

const StyledFluidContainer = styled.div`
	${color};
`

const StyledContent = styled.div`
	max-width: 1200px;
	margin: 0 auto;
`

export default FluidContainer
