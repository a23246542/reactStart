import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './todolist';
import TodoListUi from './reduxTodo/TodoListUi';
import TodoListUi2 from './reduxTodoUI/todoList';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // 一定要大寫
  <div style={{padding:'30px'}}>
    <TodoList/>
    <br/>
    <TodoListUi/>
    <br/>
    <TodoListUi2/>      
  </div> 
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
