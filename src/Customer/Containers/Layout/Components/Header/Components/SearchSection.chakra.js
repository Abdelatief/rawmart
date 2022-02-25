import { chakra, Badge } from '@chakra-ui/react'

export const IconBadge = chakra(Badge, {
	baseStyle: {
		bg: 'black',
		color: 'white',
		borderRadius: '50%',
		position: 'absolute',
		top: '-6px',
		right: '-8px',
	},
})
