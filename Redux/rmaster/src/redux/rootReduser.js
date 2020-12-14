//в файле rootReduser прописана логика приложения. В компоненте index.js логики нет
import { combineReducers } from 'redux'
import { INCREMENT, DECREMENT } from './types'

export function counterReducer(state = 0, action) {
  if (action.type === INCREMENT) {
    return state + 1
  } else if (action.type === DECREMENT) {
    return state - 1
  }
  //  else if (action.type === ASYNC_INCREMENT) {
  //   return state + 1
  // }
  return state
}

const initialThemeState = {
  value: 'Light',
}

export function themeReducer(state = initialThemeState, action) {
  return state //функция themeReducer по умолчанию возвращает state (состояние)
}

export const rootReduser = combineReducers({
  //теперь наш state является объектом у которого есть ключи counter theme
  counter: counterReducer,
  theme: themeReducer,
})
