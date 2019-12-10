const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const __dir__ = path.resolve(__dirname, '..')

////////// Regular expression definitions //////////
const regexJsAndJsx = /\.jsx?$/
const regexCss = /\.s?css$/
const regexCssModule = /\.m\.s?css$/
// const regexImage = /\.(png|jpe?g|gif)$/
////////////////////////////////////////////////////

module.exports = {
    mode: 'production',
    entry: path.resolve(__dir__, 'src', 'client', 'index.jsx'),
    module: {
        rules: [
            {
                test: regexJsAndJsx,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: regexJsAndJsx,
                loader: 'eslint-loader',
                exclude: /node_modules/,
                options: {
                    emitError: true
                }
            },
            {
                test: regexCssModule,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            localIdentName: '[name]__[local]__[hash:base64:5]',
                            modules: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: [
                                path.resolve(__dir__, 'node_modules')
                            ]
                        }
                    }
                ]
            },
            {
                test: regexCss,
                exclude: [
                    regexCssModule
                ],
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: [
                                path.resolve(__dir__, 'node_modules')
                            ]
                        }
                    }
                ]
            }
        ]
    },
    // optimization: {
    //     runtimeChunk: 'single',
    //     splitChunks: {
    //         chunks: 'all',
    //         cacheGroups: {
    //             carbon: {
    //                 enforce: true,
    //                 test: /[\\/\\]node_modules[\\/\\]carbon.*/,
    //                 name() {
    //                     return 'carbon'
    //                 }
    //             },
    //             vendors: {
    //                 enforce: true,
    //                 test: /[\\/\\]node_modules[\\/\\]/,
    //                 name(module) {
    //                     const packageName = module.context.match(/node_modules[/\\](.*)$/)[1]
    //                     return packageName.replace(/[/\\]/g, '~')
    //                 }
    //             }
    //         }
    //     }
    // },
    output: {
        filename: '[name].chunk.js',
        path: path.resolve(__dir__, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dir__, 'src', 'client', 'index.html')
        })
    ],
    resolve: {
        alias: {
            '~': path.resolve(__dir__, 'src')
        },
        extensions: ['.js', '.jsx']
    }
}
