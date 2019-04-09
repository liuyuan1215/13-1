const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
module.exports = {
    mode:'development',
    entry:{
        index:'./src/index.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    plugins:[
        new HtmlPlugin({
            template:'./src/index.html',
            hash:true
        })
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'localhost',
        port:8081
    }
}