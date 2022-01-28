import styled from 'styled-components'
import { color, layout, flexbox } from 'styled-system'

export const FluidContainer = ({ children, ...props }) => {
	return (
		<StyledFluidContainer {...props}>
			<StyledContent>{children}</StyledContent>
		</StyledFluidContainer>
	)
}

const StyledFluidContainer = styled.div`
	${color};
	${layout};
	${flexbox};
`

const StyledContent = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	height: 100%;
`

export default FluidContainer
