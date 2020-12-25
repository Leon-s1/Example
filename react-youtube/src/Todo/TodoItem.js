import React from 'react'
import PropTypes from 'prop-types' //импортируем библиотеку prop-types в компонент

function TodoItem({ todo, index }) {
  return (
    <li>
      <span>
        <input type="checkbox" />
        {todo.title}
        <strong>{index + 1} </strong>
        <button>&times;</button>
      </span>
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
}

export default TodoItem
