const isProd = process.env.NODE_ENV === 'production'

module.exports = {
	assetPrefix: isProd ? 'https://stevenmchoi.github.io/next_js' : '',
	exportPathMap: function ( defaultPathMap ) {
		return {
			'/': { page: '/' },
			'/employees': { page: '/employees' },
			'/../docs/README.md': { page: '/readme' },
			'/../docs/NOTES.md': { page: '/notes' }
		}
	}
}
