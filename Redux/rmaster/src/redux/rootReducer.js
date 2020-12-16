//в файле rootReducer прописана логика приложения. В компоненте index.js логики нет
import { combineReducers } from 'redux'
import {
  INCREMENT,
  DECREMENT,
  CHANGE_THEME,
  ENABLE_BUTTONS,
  DISABLE_BUTTONS,
} from './types'

function counterReducer(state = 0, action) {
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
  value: 'light',
  disabled: false,
}

function themeReducer(state = initialThemeState, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return { ...state, value: action.payload } //воспользуемся деструктуризацией ...state
    case ENABLE_BUTTONS:
      return { ...state, disabled: false }
    case DISABLE_BUTTONS:
      return { ...state, disabled: true }
    default:
      return state //функция themeReducer по умолчанию возвращает state (состояние)
  }
}

export const rootReducer = combineReducers({
  //теперь наш state является объектом у которого есть ключи counter theme
  counter: counterReducer,
  theme: themeReducer,
})
