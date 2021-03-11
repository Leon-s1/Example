import React, { useState, useEffect } from 'react'
import { TodoForm } from '../TodoForm'
import { TodoList } from '../TodoList'
import { ITodo } from '../../interfaces'

declare var confirm: (questions: string) => boolean //объявление метода confirm по 2-му способу

export const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
    setTodos(saved)
  }, [])

  useEffect(() => localStorage.setItem('todos', JSON.stringify(todos)), [todos])

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
    }
    // setTodos([newTodo, ...todos])
    setTodos((prev) => [newTodo, ...prev])
  }

  const toggleHandler = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,

            // todo.completed = !todo.completed
            // console.log('Нажал на инпут')
          }
        }
        return todo
      })
    )
  }

  const removeHandler = (id: number) => {
    // const shoudRemove = window.confirm('Вы действительно хотите удалить?') 1 способ использования метода confirm
    const shoudRemove = confirm('Вы действительно хотите удалить?') //2 способ использования метода confirm
    if (shoudRemove) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id))
    }
  }

  return (
    <React.Fragment>
      <TodoForm onAdd={addHandler} />

      <TodoList
        todos={todos}
        onToggle={toggleHandler}
        onRemove={removeHandler}
      />
    </React.Fragment>
  )
}
