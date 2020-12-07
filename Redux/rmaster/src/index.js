import { createStore } from './createStore'
import './styles.css'
import { rootReducer } from './redux/rootReduser'

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')

const store = createStore(rootReducer, 0) //получаем объект store который умеет взаимодействовать с данными и говорить компоненту, что в нем что то изменилось.//

// window.store = store

addBtn.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' })
})

subBtn.addEventListener('click', () => {
  store.dispatch({ type: 'DECREMENT' })
})

store.subscribe(() => {
  //передаем счетчик страницу с увеличенным или уменьшенным значением за счет подписки на событие кнопки
  // console.log(store.getState())
  const state = store.getState()

  counter.textContent = state
})

store.dispatch({ type: 'INIT_APPLICATION' }) //отрисовываем ноль на странице за счет диспатча значения которого нет

asyncBtn.addEventListener('click', () => {})

themeBtn.addEventListener('click', () => {
  // document.body.classList.toggle('dark')
})
