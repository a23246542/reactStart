import React,{useState} from 'react';

const TodoInput = ({addItem}) => {
  const [text,setText] = useState('');
  // const text = '';
  const onChangeTxt = (e) => {
    setText(e.target.value);
  };
  const addTodo = (e) => {
    e.preventDefault();
    addItem(text);
    setText('');
  };

  return (
    <form onSubmit={addTodo}>
      {/* <input type="text">{text}</input> %%input不是這樣設值*/}
      <input value={text} onChange={onChangeTxt} />
      {/* <button type="submit" onSubmit={addTodo}>送出</button> %%想說怎麼重整 要做在form上 */}
      <button type="submit">送出</button>
    </form>
  )
}


export default TodoInput;