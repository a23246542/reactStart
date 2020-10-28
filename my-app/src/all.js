import React from 'react';
import Counter from './Counter';
import Input from './3ref/InputRef';
import Parent from './4父子/Parent';
import ImgToggle from './5樣式控制/className&style';
import UseState from './hooks/UseStateCounter';
import UseStateObjCounter from './hooks/UseStateObjCounter';
import ContextButton from './contextApi/contextOpen';
import UseContextButton from './contextApi/useContextOpen';
import TodoList from './hooksTodo/TodoList';

class All extends React.Component {
  render() {
    return (
      <div>
        <Counter/>
        <br/>
        <Input/>
        <br/>
        <Parent/>
        <br/>
        <ImgToggle/>
        <h2>hooks比較</h2>
        <UseState/>
        <br/>
        <UseStateObjCounter/>
        <br/>
        <ContextButton/>
        <br/>
        <UseContextButton/>
        <br/>
        <TodoList/>
      </div>
    )
  }
}

export default All;