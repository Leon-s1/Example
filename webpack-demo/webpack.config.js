const path = require('path');
// const toml = require('toml'); 
// const yaml = require('yamljs');
// const json5 = require('json5');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
    // print: './src/print.js',
    // - another: './src/another-module.js',  //удаляем для реализации динамического импорта

    //исключим дублирование библиотеки lodash (не работает)
    // shared: ['lodash'],
    // app: { import: './src/index.js', dependOn: 'shared' },
    // another: { import: './src/another-module.js', dependOn: 'shared' },
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new CleanWebpackPlugin({cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],
  output: {
    // filename: 'main.js',
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',  //добавляем для динамического импорта
    path: path.resolve(__dirname, 'dist'),
    // publicPath: '/',
  },
  //адаляем для реализации динамического импорта
  //предотвращение дублирования lodash
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //   },
  // },
  //******************************************************************* */
  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/,
  //       use: [
  //         'style-loader',
  //         'css-loader'
  //       ]
  //     },
  //     {
  //       test: /\.(png|svg|jpg|gif)$/,
  //       use: [
  //         'file-loader'
  //       ]
  //     },
  //     {
  //       test: /\.(woff|woff2|eot|ttf|otf)$/,
  //       use: [
  //         'file-loader'
  //       ]
  //     },
  //     {
  //       test: /\.(csv|tsv)$/,
  //       use: [
  //         'csv-loader',
  //       ],
  //     },
  //     {
  //       test: /\.xml$/,
  //       use: [
  //         'xml-loader',
  //       ]
  //     },
  //     {
  //       test: /\.toml$/,
  //       type: 'json',
  //       parser: {
  //         parse: toml.parse
  //       }
  //     },
  //     {
  //       test: /\.yaml$/,
  //       type: 'json',
  //       parser: {
  //         parse: yaml.parse
  //       }
  //     },
  //     {
  //       test: /\.json5$/,
  //       type: 'json',
  //       parser: {
  //         parse: json5.parse
  //       }
  //     }      
  //   ]
  // }
    
}