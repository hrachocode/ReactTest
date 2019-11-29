import React from 'react';
const TodoListItem = ( { lable , inportante = false } ) => {
    const listStyle = {
        color: inportante ? 'green' : 'tomato'
    }
    return <span style={listStyle}>{ lable }</span>
}
export default TodoListItem