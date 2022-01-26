const CracoAlias = require('craco-alias')

module.exports = {
	plugins: [
		{
			plugin: CracoAlias,
			options: {
				source: 'jsconfig',
				baseUrl: './src', // baseUrl SHOULD be specified, plugin does not take it from tsconfig
			},
		},
	],
}
