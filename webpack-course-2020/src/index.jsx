import * as $ from 'jquery'         //подключаем библиотеку jquery
// import Post from './Post'       //относительный путь
import Post from '@models/Post'       //абсолютный путь при помощи алиаса
// import json from './assets/json'
// import xml from './assets/data.xml'
// import csv from './assets/data.csv'
// import WebpackLogo from './assets/webpack-logo.png'     //относительный путь
import WebpackLogo from '@/assets/webpack-logo.png'     //абсолютный путь
import React from 'react'
import {render} from 'react-dom'
import './babel'
import './styles/styles.css'
import './styles/less.less'
import './styles/scss.scss'



const post = new Post('Webpack Post Title', WebpackLogo)   //создаем объект поста
$('pre').addClass('code').html(post.toString())      //вывод инфо в браузер при помощи библиотеки JQURY


const App = () => (
    <div className="container">
        <h1>Webpack Course</h1>
        <hr />
        <div className="logo" />
        <hr />
        <pre />
        <hr />
        <div className="box">
        <h2>Less</h2>
        </div>

        <div className="card">
        <h2>SCSS</h2>
        </div>
    </div>
)

render(<App/>, document.getElementById('app'))


//console.log('Post to String', post.toString());

// console.log('JSON:', json);
// console.log('XML:', xml);
// console.log('SCV:', csv);