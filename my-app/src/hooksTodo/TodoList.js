import React,{useState}from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [items,setItems] = useState([]);
  // const items = [];
  const addItem = (text) => {
    setItems([...items,{id:Date.now(),text}])
  }

  const removeItem = (id) => {
    console.log('aa');
    setItems(items.filter(item=>item.id!==id));
  }

  return(
    <div>
      <TodoInput addItem={addItem}></TodoInput>
      <ul>
        { items.map((item) => (
          <TodoItem 
          key={item.id}
          id={item.id}
          removeTodo={removeItem}
          // onClick={removeItem(item.id)}//@@%%發現會壞掉 
          // onClick={() => removeItem(item.id)} //%%跟組件上沒辦法用原生click
          >{ item.text }</TodoItem>
        ))}
      </ul>
    </div>
  )
}

export default TodoList;