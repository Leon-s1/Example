//в файле rootReduser прописана логика приложения. В компоненте index.js логики нет
export function rootReducer(state, action) {
  if (action.type === 'INCREMENT') {
    return state + 1
  } else if (action.type === 'DECREMENT') {
    return state - 1
  }
  return state
}
