import React, { useState } from 'react'
import { Navbar } from './components/Navbar'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([])

  const addHandler = (title: string) => {
    console.log('Add new todo ', title)
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <TodoForm onAdd={addHandler} />

        <TodoList todos={todos} />
      </div>
    </>
  )
}

export default App
