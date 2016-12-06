var config = require('./webpack.base.config')

config.devtool = 'eval-source-map'

config.devServer = {
	historyApiFallback: true,
	noInfo: true,
	colors: true,
	hot: true,
	inline: true,
	headers: { 'Access-Control-Allow-Origin': '*' }
}

module.exports = config
