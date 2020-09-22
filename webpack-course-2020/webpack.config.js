const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin')     //установка с сайта NodeJS
const TerserWebpackPlugin = require('terser-webpack-plugin')
const { loader } = require('mini-css-extract-plugin')
const { loadavg } = require('os')

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
//шаблон лоадера с одинаковым кодом
const cssLoaders = extra => {
    const loaders = [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
                hmr: isDev,             //hot modul replacement
                reloadAll: true
            },
        },    
        'css-loader'
    ]

    if (extra) {
        loaders.push(extra)
    }

    return loaders
}

//Шаблон BabelOptions
const babelOptions = preset => {
    const opts = {
        presets: [
           '@babel/preset-env',
        ],
        plugins: [
           '@babel/plugin-proposal-class-properties'
        ]
    }
    if (preset) {
        opts.presets.push(preset)
    }

    return opts
}

const jsLoaders = () => {
    const loaders = [{
        loader: 'babel-loader',
        options: babelOptions()
      }]

      if (isDev) {
          loaders.push('eslint-loader')
      }

    return loaders
}



//добавление расширения в зависимости от режима разработки. функция 
const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {                                                    //точки входа в программу
        main: ['@babel/polyfill', './index.jsx'],
        analytics: './analytics.ts'
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
    devtool: isDev? 'source-map' : '', 
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
                use: cssLoaders()                       //лоадеры, должны быть установлены. идет справа на лево
            },
            {
                test: /\.less$/,                         //шаблон, по которому рабоает less лоадер
                use: cssLoaders('less-loader')                    //лоадеры, должны быть установлены. идет справа на лево
            },
            {
                test: /\.s[ac]ss$/,                         //паттерн, по которому рабоает sass scss лоадер
                use: cssLoaders('sass-loader')                    //лоадеры, должны быть установлены. идет справа на лево
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
            },
            {
                test: /\.js$/,                        //правило для babel-loader
                exclude: /node_modules/,              //исключить node modules 
                use: jsLoaders()
            },
            {
                test: /\.ts$/,                        //правило для babel-loader
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: babelOptions('@babel/preset-typescript')
                }
            },
            {
                test: /\.jsx$/,                        //правило для babel-loader
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: babelOptions('@babel/preset-react')
                }
            }
        ]
    }
}
