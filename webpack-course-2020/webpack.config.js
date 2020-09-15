const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin')     //установка с сайта NodeJS
const TerserWebpackPlugin = require('terser-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
console.log('IS DEV', isDev);
const isProd = !isDev

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        } 
    }

    if (isProd) {
        config.minimizer = [
            new OptimizeCssAssetWebpackPlugin(),
            new TerserWebpackPlugin() 
        ]
    }
    return config
}

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {                                                    //точки входа в программу
        main: './index.js',
        analytics: './analytics.js'
    },
    output: {                                                   //выходные файлы
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {                                                  //указание путей
        extensions: ['.js', '.json', '.png'],
        alias: {
            '@models': path.resolve(__dirname, 'src/models'),
            '@': path.resolve(__dirname, 'src')
        }
    },
    optimization: optimization(), 
                                  //функция
    devServer: {
        port: 4200,
        hot: isDev
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
            minify: {
                collapseWhitespace: isProd
            }                          //минификация файла index.html 
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
            {
                from: path.resolve(__dirname, 'src/favicon.ico'),
                to: path.resolve(__dirname, 'dist'),
            }
            ],
        }),
        new MiniCssExtractPlugin({                  //плагин для работы с css файлами
            filename: filename('css')
        })
    ],
    module: {       //использование лоадеров
        rules: [    //правила
            {
                test: /\.css$/,                         //шаблон, по которому рабоает css лоадер
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: isDev,             //hot modul replacement
                            reloadAll: true
                        },
                    },    
                    'css-loader'
                ]                        //лоадеры, должны быть установлены. идет справа на лево
            },
            {
                test: /\.less$/,                         //шаблон, по которому рабоает less лоадер
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: isDev,             //hot modul replacement
                            reloadAll: true
                        },
                    },    
                    'css-loader',
                    'less-loader'
                ]                        //лоадеры, должны быть установлены. идет справа на лево
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
