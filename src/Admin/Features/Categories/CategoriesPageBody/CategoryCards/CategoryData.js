import defaultImage from '../CategoryCards/Assets/default.png'
import wiresImage from '../CategoryCards/Assets/wires.jpg'
import plumbingImage from '../CategoryCards/Assets/Plumbing.jpg'
import paintingImage from '../CategoryCards/Assets/painting.jpg'
import testImage from '../CategoryCards/Assets/test.png'
import testImage2 from '../CategoryCards/Assets/test2.png'
import lightImage from '../CategoryCards/Assets/light.jpg'
import lampImage from '../CategoryCards/Assets/lamp.png'

export const CategoriesData = [
	{
		id: 1,
		title: 'Elec sub',
		img: defaultImage,
		new: false,
	},
	{
		id: 2,
		title: 'Wires',
		img: wiresImage,
		new: false,
	},
	{
		id: 3,
		title: 'Painting',
		img: paintingImage,
		new: false,
	},
	{
		id: 4,
		title: 'Electrical',
		img: wiresImage,
		new: false,
	},
	{
		id: 5,
		title: 'مواسير صرف',
		img: defaultImage,
		new: false,
	},
	{
		id: 6,
		title: 'Plumbing',
		img: plumbingImage,
		new: false,
	},
	{
		id: 7,
		title: 'test sub category',
		img: testImage,
		new: false,
	},
	{
		id: 8,
		title: 'test category',
		img: testImage2,
		new: false,
	},
	{
		id: 9,
		title: 'Lighting',
		img: lightImage,
		new: true,
	},
	{
		id: 10,
		title: 'Electrical',
		img: lampImage,
		new: true,
	},
]
