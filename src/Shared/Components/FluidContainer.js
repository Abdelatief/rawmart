import styled from 'styled-components'
import { color, layout, flexbox, space } from 'styled-system'

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
	${space};
`

const StyledContent = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	height: 100%;

	@media (max-width: 832px) {
		padding: 0 12px;
	}
`

export default FluidContainer
