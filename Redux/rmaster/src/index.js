// import { createStore } from './createStore' импортируем createStore из библиотеки redux
import { createStore } from 'redux' //импортируем createStore из библиотеки redux после установки
import { decrement, increment } from './redux/actions'
import { rootReducer } from './redux/rootReduser'
// import { DECREMENT, INCREMENT } from './redux/types' избавляемся от констант, импортируем функции
import './styles.css'

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')

const store = createStore(rootReducer, 0) //получаем объект store который умеет взаимодействовать с данными и говорить компоненту, что в нем что то изменилось.//

// window.store = store

addBtn.addEventListener('click', () => {
  // store.dispatch({ type: 'INCREMENT' }) упрощаем написание кода путем импорта констант из файла types.js
  // store.dispatch({ type: INCREMENT }) делаем код выразительнее, вместо констант добавляем функции. импорт из action.js
  store.dispatch(increment())
})

subBtn.addEventListener('click', () => {
  // store.dispatch({ type: 'DECREMENT' })
  store.dispatch(decrement())
})

store.subscribe(() => {
  //передаем счетчик страницу с увеличенным или уменьшенным значением за счет подписки на событие кнопки в консоль
  console.log(store.getState())
  const state = store.getState()

  counter.textContent = state
})

store.dispatch({ type: 'INIT_APPLICATION' }) //отрисовываем ноль на странице за счет диспатча значения которого нет

asyncBtn.addEventListener('click', () => {})

themeBtn.addEventListener('click', () => {
  // document.body.classList.toggle('dark')
})
