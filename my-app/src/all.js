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
import FilterableProductTable from './react思考/FilterableProductTable';
import PopApp from './contextPop/PopApp';

import ReduxTodo from './reactRedux/index';

const data = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

class All extends React.Component {
  render() {
    return (
      <div style={{padding:'0 100px'}}>
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
        <br/> 
        <FilterableProductTable products = {data} />
        <br/>
        <PopApp/>
        <br/>
        <h3>react-redux</h3>
        <ReduxTodo/>
      </div>
    )
  }
}

export default All;