const prodConfig = require('./webpack.config.js')
const proxyConfig = require('./dev/proxy-config.js')

module.exports = {
    ...prodConfig,
    mode: 'development',
    devServer: {
        open: true,
        proxy: proxyConfig,
        // stuff for serving on network
        // disableHostCheck: true,
        // host: '0.0.0.0',
        // useLocalIp: true
    },
    devtool: 'source-map'
}

module.exports.module.rules[1].options.emitError = false
module.exports.module.rules[1].options.emitWarning = true
