//в файле rootReduser прописана логика приложения. В компоненте index.js логики нет
import { INCREMENT, DECREMENT, ASYNC_INCREMENT } from './types'

export function counterReducer(state, action) {
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

export function themeReducer(state, action) {
  return state
}
