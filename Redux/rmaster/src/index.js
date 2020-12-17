// import { createStore } from './createStore' импортируем createStore из библиотеки redux
import { applyMiddleware, createStore, compose } from 'redux' //импортируем createStore из библиотеки redux после установки
import thunk from 'redux-thunk' //импотируем redux-thunk после установки
import { composeWithDevTools } from 'redux-devtools-extension'
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
//1 вый вариант подключения devtools extension
// const store = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(thunk, logger),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// ) //получаем объект store который умеет взаимодействовать с данными и говорить компоненту, что в нем что то изменилось.//
//2ой вариант подключения devtools extension

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
)

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

asyncBtn.addEventListener('click', () => {
  store.dispatch(asyncIncrement())
  // setTimeout(() => {   так делать нельзя
  //   store.dispatch(increment())
  // }, 2000)
})

themeBtn.addEventListener('click', () => {
  const newTheme = document.body.classList.contains('light') ? 'dark' : 'light'
  store.dispatch(changeTheme(newTheme))
  // document.body.classList.toggle('dark')//первоначальный вариант переключения темы
})

store.subscribe(() => {
  //передаем счетчик страницу с увеличенным или уменьшенным значением за счет подписки на событие кнопки в консоль
  // console.log(store.getState())
  const state = store.getState()
  // console.log('state = ', state)
  counter.textContent = state.counter
  document.body.className = state.theme.value
  ;[addBtn, subBtn, themeBtn, asyncBtn].forEach((btn) => {
    btn.disabled = state.theme.disabled
  })
})

store.dispatch({ type: 'INIT_APPLICATION' }) //отрисовываем ноль на странице за счет диспатча значения которого нет
