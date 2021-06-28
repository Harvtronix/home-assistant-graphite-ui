require('dotenv').config()
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

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
                            modules: {
                                localIdentName: '[name]__[local]__[hash:base64:5]'
                            }
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                includePaths: [
                                    path.resolve(__dir__, 'node_modules')
                                ]
                            }
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
                            sassOptions: {
                                includePaths: [
                                    path.resolve(__dir__, 'node_modules')
                                ]
                            }
                        }
                    }
                ]
            }
        ]
    },
    output: {
        filename: '[name].chunk.js',
        path: path.resolve(__dir__, 'dist'),
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dir__, 'src', 'client', 'index.html')
        }),
        new CopyWebpackPlugin([
            path.resolve(__dir__, 'src', 'client', 'www')
        ])
    ],
    resolve: {
        alias: {
            '~': path.resolve(__dir__, 'src')
        },
        extensions: ['.js', '.jsx']
    }
}
