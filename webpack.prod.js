const config = require('./webpack.dev')

config.mode = 'production'
config.devServer = undefined
config.devtool = ''

module.exports = config
