import * as $ from 'jquery'         //подключаем библиотеку jquery
// import Post from './Post'       //относительный путь
import Post from '@models/Post'       //абсолютный путь при помощи алиаса
// import json from './assets/json'
// import xml from './assets/data.xml'
// import csv from './assets/data.csv'
// import WebpackLogo from './assets/webpack-logo.png'     //относительный путь
import WebpackLogo from '@/assets/webpack-logo.png'     //абсолютный путь
import './styles/styles.css'


const post = new Post('Webpack Post Title', WebpackLogo)   //создаем объект поста

$('pre').html(post.toString())

//console.log('Post to String', post.toString());

// console.log('JSON:', json);
// console.log('XML:', xml);
// console.log('SCV:', csv);