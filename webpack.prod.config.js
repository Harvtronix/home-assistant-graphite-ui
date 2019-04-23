const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

////////// Regular expression definitions //////////
const regexJsAndJsx = /\.jsx?$/
// const regexCss = /\.css$/
// const regexCssModule = /\.module\.css$/
// const regexImage = /\.(png|jpe?g|gif)$/
////////////////////////////////////////////////////

module.exports = {
    mode: "production",
    entry: "./src/index.jsx",
    module: {
        rules: [
            {
                test: regexJsAndJsx,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: regexJsAndJsx,
                loader: "eslint-loader",
                exclude: /node_modules/,
                options: {
                    emitError: true
                }
            }
        ]
    },
    optimization: {
        runtimeChunk: "single",
        splitChunks: {
            chunks: "all",
            cacheGroups: {
                vendors: {
                    enforce: true,
                    test: /[\\/\\]node_modules[\\/\\]/,
                    name(module) {
                        const packageName = module.context.match(/node_modules[/\\](.*)$/)[1]
                        console.log(packageName.replace(/[/\\]/g, "~"))
                        return packageName.replace(/[/\\]/g, "~")
                    }
                }
            }
        }
    },
    output: {
        filename: "[name].chunk.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html"
        })
    ],
    resolve: {
        extensions: [".js", ".jsx"]
    }
}
