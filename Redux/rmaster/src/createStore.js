export function createStore(rootReducer, initialState) {
  let state = rootReducer(initialState, { type: '__INIT__' })
  const subscribers = []

  return {
    //action === {type:''INCREMENT} действия прописаны в файле rootReducer
    dispatch(action) {
      state = rootReducer(state, action)
      subscribers.forEach((sub) => sub())
    },

    subscribe(callback) {
      subscribers.push(callback) //функция для подписки на store
    },

    getState() {
      return state //функция для передачи состояния
    },
  }
}
