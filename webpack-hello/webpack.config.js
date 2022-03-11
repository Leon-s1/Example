const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {loader} = require('mini-css-extract-plugin')
const Webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')

const isDev = process.env.NODE_ENV === 'development'
console.log('IS DEV', isDev)
const isProd = !isDev


const cssLoaders = (extra) => {
    const loaders = [
        {
            loader: MiniCssExtractPlugin.loader,
            // options: {
                // hmr: isDev,
                // reloadAll: true
            // },
        },
        'css-loader'
    ]
    if (extra) {
        loaders.push(extra)
    }
    return loaders
}

const jsLoaders = () => {
    const loaders = [
        {
            loader:'babel-loader',
            options: babelOptions(),
        }
    ]
    if (isDev) {
        loaders.push('eslint-loader')
    }
    return loaders
}

const babelOptions = (preset) => {
    const opts = {
        presets: ['@babel/preset-env'],
        plugins: ['@babel/plugin-proposal-class-properties']
    }
    if (preset) {
        opts.presets.push(preset)
    }
    return opts
}



const plugins = () => {
    const base = [
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
        new MiniCssExtractPlugin ({
            filename: filename('css')
        })
    ]
    if (isProd) {
        base.push(new BundleAnalyzerPlugins)
    }
    return base
}

const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`)


module.exports = {
    context:path.resolve(__dirname,'src'),
    mode: 'development',
    entry: {
    main:'./index.jsx'
    },
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        port: 4200,
        hot: isDev,
    },

    plugins: plugins(),

    module: {
        rules: [
            {
                test: /\.css$/,
                use: cssLoaders()
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:jsLoaders(),
            },
            {
                test: /\.jsx$/, //правило для babel-loader
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: babelOptions('@babel/preset-react'),
                },
            },
        ],
    },
}

