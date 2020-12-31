import React, { useContext } from 'react'
import PropTypes from 'prop-types' //импортируем библиотеку prop-types в компонент
import Context from '../context'

const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.5rem 1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '.5rem',
  },
  input: {
    marginRight: '1rem',
  },
}

function TodoItem({ todo, index, onChange }) {
  // console.log('todo', todo) проверка вывода itema в консоль
  const { removeTodo } = useContext(Context) //подключим функцию useContext и подключим сам Context
  const classes = []

  if (todo.completed) {
    classes.push('done')
  }

  return (
    <li style={styles.li}>
      <span className={classes.join(' ')}>
        <input
          type="checkbox"
          checked={todo.completed}
          style={styles.input}
          onChange={() => onChange(todo.id)}
        />
        <strong>{index + 1} </strong>
        &nbsp;
        {todo.title}
      </span>
      {/* <button className="rm" onClick={() => removeTodo(todo.id)}>   1 способ*/}
      <button className="rm" onClick={removeTodo.bind(null, todo.id)}>
        &times;
      </button>
    </li>
  )
}
//для валидации описываем свойства в библиотеке prop-types
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
}

export default TodoItem
