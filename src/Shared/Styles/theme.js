const colors = {
	background: {
		white: '#FFFFFF',
		cultured: '#F7F7F7',
		seashell: '#FBF4EE',
		blanchedAlmond: '#F7E6C8',
		gainsboro: '#D9E2EB',
		black: '#000000',
	},
	text: {
		white: '#FFFFFF',
		whiteDimmed: '#FFFFFF3B',
		celadon: '#AFD39A',
		azure: '#007BFF',
		deepTaupe: '#756565',
		davysGray: '#4B4B4B',
		charlestonGreen: '#212529',
		black: '#000000',
		lightBlack: '#00000099',
	},
	border: {
		gainsboro: '#DADADA',
	},
}

const buttonVariants = {
	primary: {
		backgroundColor: colors.text.black,
		color: colors.text.white,
		_hover: {
			backgroundColor: colors.text.celadon,
		},
	},
	secondary: {
		color: colors.text.white,
		backgroundColor: colors.text.celadon,
	},
	tertiary: {
		color: colors.text.white,
		backgroundColor: colors.text.black,
		_hover: {
			color: colors.text.black,
			backgroundColor: '#e0ecde',
			borderColor: colors.text.black,
			border: '1px solid',
		},
	},
}

const theme = {
	colors,
	fontSizes: [12, 14, 16, 18, 20, 22, 30, 34, 60],
	button: buttonVariants,
}

export default theme
