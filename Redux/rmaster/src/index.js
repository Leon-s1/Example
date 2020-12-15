// import { createStore } from './createStore' импортируем createStore из библиотеки redux
import { applyMiddleware, createStore } from 'redux' //импортируем createStore из библиотеки redux после установки
import thunk from 'redux-thunk' //импотируем redux-thunk после установки
import logger from 'redux-logger' //импортируем логгер из библиотеки redux-logger
import {
  asyncIncrement,
  changeTheme,
  decrement,
  increment,
} from './redux/actions'
import { rootReducer } from './redux/rootReducer'
// import { DECREMENT, INCREMENT } from './redux/types' избавляемся от констант, импортируем функции
import './styles.css'

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')
//самописный логгер. мы будет использовать уже написанный логгер для redux с сайта npm
// function logger(state) {
//   return function (next) {
//     return function (action) {
//       console.log('Prev State', state.getState)
//       console.log('Action', action)
//       const newState = next(action)
//       console.log('New State', newState)
//       return newState
//     }
//   }
// }
// удаляем начальное состояние 0 из параметров createStore
const store = createStore(rootReducer, applyMiddleware(thunk, logger)) //получаем объект store который умеет взаимодействовать с данными и говорить компоненту, что в нем что то изменилось.//

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
  // console.log(store.getState())
  const state = store.getState()
  // console.log('state = ', state)
  counter.textContent = state.counter
  document.body.className = state.theme.value
})

store.dispatch({ type: 'INIT_APPLICATION' }) //отрисовываем ноль на странице за счет диспатча значения которого нет

asyncBtn.addEventListener('click', () => {
  store.dispatch(asyncIncrement())
  // setTimeout(() => {   так делать нельзя
  //   store.dispatch(increment())
  // }, 2000)
})

themeBtn.addEventListener('click', () => {
  store.dispatch(changeTheme())
  // document.body.classList.toggle('dark')
})
