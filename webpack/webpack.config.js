const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // use:['style-loader','css-loader']
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(jpg|png|gif)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 5000,
                        outputPath: '/images'
                    }
                }]
            },{
                test:/\.(html|htm)/i,
                use:['html-withimg-loader']
            }
        ]
    },
    plugins: [
        new HtmlPlugin({
            template: './src/index.html',
            hash: true
        }),
        new ExtractTextPlugin("index.css"),
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        host: 'localhost',
        port: 8081
    }
}