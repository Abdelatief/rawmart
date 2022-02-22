import visa from './/Assets/visa.png'
import cash from './/Assets/money.jpg'

export const PaymentsData = [
	{
		id: 1,
		name: 'Visa',
		description: 'Description test',
		active: true,
		img: visa,
		credentials: [
			{
				key: 1,
				value: 'value 1',
			},
		],
	},
	{
		id: 2,
		name: 'Cash',
		description: 'Description test',
		active: true,
		img: cash,
		credentials: [
			{
				key: 1,
				value: 'value 1',
			},
		],
	},
]
