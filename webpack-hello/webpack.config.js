const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server');


module.exports = {
    context:path.resolve(__dirname,'src'),
    mode: 'development',
    entry: {

    }'./src/main.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
    static: {
        directory: path.join(__dirname, 'public'),
    },
        compress: true,
        port: 9000,
    },
    //     // contentBase: './dist'
    //     // stats: 'errors-only'
    //     contentBase: "./",
    //     historyApiFallback:true,
    //     inline:true,
    //     hot:true
    // },

    plugins: [
        new Webpack.ProvidePlugin({
               $: 'jquery',
               jQuery: 'jquery'
        }),
        // new webpack.HotModuleReplacementPlugin()
    ],

    }

