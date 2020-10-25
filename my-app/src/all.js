import React from 'react';
import Counter from './Counter';
import Input from './3ref/InputRef';
import Parent from './4父子/Parent';

class All extends React.Component {
  render() {
    return (
      <div>
        <Counter/>
        <br/>
        <Input/>
        <br/>
        <Parent/>
      </div>
    )
  }
}

export default All;