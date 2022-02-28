const path = require('path');
const Webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server');


module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    // devServer: {
    //     contentBase: './dist'
    // },

        plugins: [
            new Webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery'
            }),
        ]
    }

