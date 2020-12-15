import { /*ASYNC_INCREMENT*/ CHANGE_THEME, DECREMENT, INCREMENT } from './types'

export function increment() {
  return {
    type: INCREMENT,
  }
}
export function decrement() {
  return {
    type: DECREMENT,
  }
}

export function changeTheme() {
  return {
    type: CHANGE_THEME,
  }
}

export function asyncIncrement() {
  return function (dispatch) {
    setTimeout(() => {
      // dispatch({ type: ASYNC_INCREMENT }) улучшаем код путем удаления типа ASYNC_INCREMENT, потомучто ASYNC_INCREMENT делает тоже чтои INCREMENT
      dispatch({ type: INCREMENT })
    }, 1500)
  }
}
