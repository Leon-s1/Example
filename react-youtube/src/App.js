import React, { useEffect } from 'react'
import TodoList from './Todo/TodoList'
import Context from './context'
// import AddTodo from './Todo/AddTodo' LazyLoad удаляем импорт AddTodo и создаем переменную AddTodo
import Loader from './Loader'
import Modal from './Modal/Modal'

const AddTodo = React.lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import('./Todo/AddTodo'))
      }, 3000)
    })
) //создаем переменную AddTodo для медленной загрузки

function App() {
  //setTodos функция изменения стейта массива todos
  //учитывая что мы получаем todo с сервера, то в качестве дефолтного значения указываем пустой массив
  const [todos, setTodos] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  //второй вариант задания первоначального состояния в переменную todos
  //передаем в функцию useState начальное состояние, т.е. весь массив todos
  // const [todos, setTodos] = React.useState([
  //   { id: 1, completed: false, title: 'Купить хлеб' },
  //   { id: 2, completed: true, title: 'Купить масло' },
  //   { id: 3, completed: false, title: 'Купить молоко' },
  // ])

  // let todos = [   первоначальный вариант массив в переменной todos
  //   { id: 1, completed: false, title: 'Купить хлеб' },
  //   { id: 2, completed: false, title: 'Купить масло' },
  //   { id: 3, completed: false, title: 'Купить молоко' },
  // ]

  //хук useEffect передает с сервера 5 todo для записи в массив todos
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then((response) => response.json())
      .then((todos) => {
        setTimeout(() => {
          setTodos(todos)
          setLoading(false)
        }, 2000)
      })
  }, [])

  function toggleTodo(id) {
    // todos = todos.map((todo) => { было раньше. новый массив присваивался переменной todos
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false,
        },
      ])
    )
  }
  /*Context.Provider для передачи опред. функций сквозь другие компоненты*/
  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>React tutorial</h1>
        <Modal />
        {/* <React.Suspense fallback={<p>Loading...</p>}> */}
        <React.Suspense fallback={<Loader />}>
          <AddTodo onCreate={addTodo} />
        </React.Suspense>

        {loading && <Loader />}
        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : loading ? null : (
          <p>No todos!</p>
        )}
      </div>
    </Context.Provider>
  )
}

export default App
