import React from 'react';
import TodoListItem from '../todo-liat-item'
import './todo-list.css'

const showListItem = (item) => {
  const { id, ...itemProps } = item;
  return (
    <li key={id} className="list-group-item">
      <TodoListItem {...itemProps} />
    </li>
  )
}

const TodoList = ({ todos }) => {
  const element = todos.map(singleTodo => showListItem(singleTodo))
  return (
    <ul className="list-group todo-list">
      {element}
    </ul>
  )
}
export default TodoList;
