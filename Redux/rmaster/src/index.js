import { createStore } from './createStore'
import './styles.css'
import { rootReducer } from './redux/rootReduser'

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')

const store = createStore(rootReducer, 0) //получаем объект store который умеет взаимодействовать с данными и говорить компоненту, что в нем что ////то изменилось.//

window.store = store

addBtn.addEventListener('click', () => {})

subBtn.addEventListener('click', () => {})

asyncBtn.addEventListener('click', () => {})

themeBtn.addEventListener('click', () => {
  // document.body.classList.toggle('dark')
})
