import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/todo-list';
import TodoHeader from './components/app-header';
import TodoSearch from './components/search-panel';
const data = [
    {lable: 'Drink Coffee', inportante: false},
    {lable: 'Sendvich', inportante: true},
    {lable: 'Aplee', inportante: false}
]

const App = () => {
    return (
        <div>
            <TodoHeader/>
            <TodoSearch />
            <TodoList  todos={data} />
            {/* <span>{(new Date()).toString()}</span> */}
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))