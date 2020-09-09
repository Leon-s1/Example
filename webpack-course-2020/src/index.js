import Post from './Post'
import './styles/styles.css'
import WebpackLogo from './assets/webpack-logo.png'
import json from './assets/json'

const post = new Post('Webpack Post Title', WebpackLogo)   //создаем объект поста

console.log('Post to String', post.toString());

console.log('JSON:', json);