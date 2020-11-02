import React,{useState}from 'react';
// import 'antd/dist/antd.css';
// import { Input, Button, List } from 'antd';
import store  from './store';
// import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from './store/actionTypes';
import {getInputChangeAction, getAddItemAction, getDeleteItemAction} from './store/actionCreator';
import TodoListUi from './todoListUI';

// const data = store.getState(); //nonIterableSpread.js:2 Uncaught TypeError: Invalid attempt to spread non-iterable instance.

const TodoList = () => {

  // const data = store.getState();//%%%react 不能直接在function component有資料 nonIterableSpread.js:2 Uncaught TypeError: Invalid attempt to spread non-iterable instance.
  const [input, setInput] = useState(store.getState().inputValue);
  const [list, setList] = useState(store.getState().list);
  // store.subscribe(handleStoreChange);//@@ReferenceError: Cannot access 'handleStoreChange' before initialization

    
  const hanldeInputChange = (e) => { //存到store
    store.dispatch(getInputChangeAction(e.target.value));
  }
  
  const handleBtnClick = () => {
    store.dispatch(getAddItemAction());
  }
  
  const handleItemDelete = (index) => {
    store.dispatch(getDeleteItemAction(index));
  }
  
  const handleStoreChange = () => { //拿回store資料 更新dom
    setInput(store.getState().inputValue);
    setList(store.getState().list);
  }
  store.subscribe(handleStoreChange);//!!!!!%%%放在後面才吃得到
 
  return ( //@@@後面沒辦法高量怎麼辦
    <TodoListUi
      input = {input}
      list = {list}
      hanldeInputChange = {hanldeInputChange}
      handleBtnClick = {handleBtnClick}
      handleItemDelete = {handleItemDelete}
      // {...handleBtnClick,handleBtnClick}
    />
  );

}

export default TodoList;