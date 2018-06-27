const isProd = ( process.env.NODE_ENV || 'production' ) === 'production'

module.exports = {
	assetPrefix: isProd ? '/next_js' : '',
	exportPathMap: function ( defaultPathMap ) {
		return {
			'/': { page: '/' },
			'/employees': { page: '/employees' }
		}
	}
}
