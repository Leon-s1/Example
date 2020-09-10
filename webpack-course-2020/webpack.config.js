const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: './index.js',
        analytics: './analytics.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.json', '.png'],
        alias: {
            '@models': path.resolve(__dirname, 'src/models'),
            '@': path.resolve(__dirname, 'src')
        }
    }
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin()
    ],
    module: {       //использование лоадеров
        rules: [    //правила
            {
                test: /\.css$/,                         //шаблон, по кторому рабоает лоадер
                use: ['style-loader', 'css-loader']     //лоадеры, должны быть установлены. идет справа на лево
            },
            {
                test: /\.(png|jpg|svg|gif)$/,           //регулярное выражение для расширений картинок
                use: ['file-loader']                    //лоадер, должен быть установлен
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,        //регулярное выражение для расширений шрифтов
                use: ['file-loader']                    //лоадер, должен быть установлен
            },
            {
                test: /\.xml$/,                         //регулярное выражение для расширений xml
                use: ['xml-loader']                     //лоадер, должен быть установлен
            },
            {
                test: /\.csv$/,                         //регулярное выражение для расширений xml
                use: ['csv-loader']                     //лоадер, должен быть установлен
            }
        ]
    }
}
