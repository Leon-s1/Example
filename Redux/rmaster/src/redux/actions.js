import {
  /*ASYNC_INCREMENT*/ CHANGE_THEME,
  DECREMENT,
  DISABLE_BUTTONS,
  ENABLE_BUTTONS,
  INCREMENT,
} from './types'
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
export function enableButtons() {
  //криэйтор creator для экшена ENABLE_BUTTONS
  return {
    type: ENABLE_BUTTONS,
  }
}
export function disableButtons() {
  return {
    type: DISABLE_BUTTONS,
  }
}
export function changeTheme(newTheme) {
  return {
    type: CHANGE_THEME,
    payload: newTheme,
  }
}
export function asyncIncrement() {
  return function (dispatch) {
    dispatch(disableButtons())
    setTimeout(() => {
      // dispatch({ type: ASYNC_INCREMENT }) улучшаем код путем удаления типа ASYNC_INCREMENT, потомучто ASYNC_INCREMENT делает тоже чтои INCREMENT
      // dispatch({ type: INCREMENT })
      dispatch(increment())
      dispatch(enableButtons())
    }, 1500)
  }
}
