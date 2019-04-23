const prodConfig = require("./webpack.prod.config.js")

module.exports = {
    ...prodConfig,
    mode: "development"
}

module.exports.module.rules[1].options.emitError = false
module.exports.module.rules[1].options.emitWarning = true
