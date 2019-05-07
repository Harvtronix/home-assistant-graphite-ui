const prodConfig = require('./webpack.prod.config.js')

module.exports = {
    ...prodConfig,
    mode: 'development',
    devServer: {
        proxy: {
            // '/api': 'http://voltorb:8123'
            '/api': 'http://localhost:3000'
        }
    }
}

module.exports.module.rules[1].options.emitError = false
module.exports.module.rules[1].options.emitWarning = true
