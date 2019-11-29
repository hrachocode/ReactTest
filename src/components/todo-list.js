import React from 'react';
import TodoListItem from './todo-list-item';
const TodoList = ({todos}) => {
    const element = todos.map((item) => {
        return(
            // <li><TodoListItem lable={item.lable} inportante={item.inportante}/></li>
            <li><TodoListItem {...item}/></li>
        )
    })
    return (
        <ul>
            {element}
        </ul>
    
    )
}
export default TodoList;