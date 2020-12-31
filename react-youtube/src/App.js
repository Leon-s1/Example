import React from 'react'
import TodoList from './Todo/TodoList'
import Context from './context'

function App() {
  //setTodo функция изменения стейта массива todos
  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: 'Купить хлеб' },
    { id: 2, completed: true, title: 'Купить масло' },
    { id: 3, completed: false, title: 'Купить молоко' },
  ]) //передаем в функцию useState начальное состояние, т.е. весь массив todos
  // let todos = [   первоначальный вариант массив в переменной todos
  //   { id: 1, completed: false, title: 'Купить хлеб' },
  //   { id: 2, completed: false, title: 'Купить масло' },
  //   { id: 3, completed: false, title: 'Купить молоко' },
  // ]

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

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>React tutorial</h1>

        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : (
          <p>No todos!</p>
        )}
      </div>
    </Context.Provider>
  )
}

export default App
