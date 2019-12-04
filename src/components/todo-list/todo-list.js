import React from 'react';
import TodoListItem from '../todo-liat-item'
import './todo-list.css'

// const showListItem = (item) => {
//   const { id, ...itemProps } = item;
//   return (
//     <li key={id} className="list-group-item">
//       <TodoListItem {...itemProps} onDelered={() => console.log('deleted')} />
//     </li>
//   )
// }

// const TodoList = ({ todos }) => {
//   const element = todos.map(singleTodo => showListItem(singleTodo))
//   return (
//     <ul className="list-group todo-list">
//       {element}
//     </ul>
//   )
// }
const TodoList =({todos, onDelered, onToggleImportant , onToggleDone}) => {
  const element = todos.map((item) => {
    const {id, ...itemProps} = item;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          {...itemProps}
          onDelered={() => onDelered(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() =>  onToggleDone(id)}
        />
      </li>
    )
  })
  return (
    <ul className="list-group todo-list">
      {element}
    </ul>
  )
}
export default TodoList;
