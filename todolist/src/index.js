import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './todolist';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // 一定要大寫
  <TodoList/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();