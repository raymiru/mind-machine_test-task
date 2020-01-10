const { join } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: 'development',
    entry: {
        app: join(__dirname, './src/main.js')
    },
    output: {
        path: join(__dirname, './public'),
        filename: '[name].bundle.js'
    },
    devServer: {
        hot: true
    },
    devtool: 'inline-source-map',


    resolve: {
        extensions: ['.vue', '.js', '.css'],
        alias: {
            '@': join(__dirname, 'src/')
        }
    },
    plugins: [
        new CopyWebpackPlugin([
            {from: 'static', to: 'static'}
        ]),
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: join(__dirname, './src/index.html'),
            showErrors: true,
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js,vue)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader'],
            },
            {
                test: /\.vue$/,
                use: [
                    'vue-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ],
            },
        ]
    },
}
