import React from 'react';

const TodoItem = ({children,removeTodo,id}) => (
  // <li onClick={()=>removeTodo(id)}>{children}</li>//@@到底哪個才對
  <li onClick={()=>{removeTodo(id)}}>{children}</li>//!!也式可以阿
)



export default TodoItem;