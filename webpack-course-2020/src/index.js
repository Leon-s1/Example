import Post from './Post'
// import json from './assets/json'
// import xml from './assets/data.xml'
// import csv from './assets/data.csv'
import WebpackLogo from './assets/webpack-logo.png'
import './styles/styles.css'


const post = new Post('Webpack Post Title', WebpackLogo)   //создаем объект поста

console.log('Post to String', post.toString());

// console.log('JSON:', json);
// console.log('XML:', xml);
// console.log('SCV:', csv);