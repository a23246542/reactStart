import React, { createRef } from 'react';

class Input extends React.Component {

  myInput3 = createRef();//指定到一個變數身上 然後把這個放在元素上  @@為何不行給宣告const 

  componentDidMount() {
    // 第一種
    // this.refs.myInput1.focus();//已淘汰
    // 第二種
    // this.myInput2.focus();
    // 第三種 
      this.myInput3.current.focus();//@@發現為何用第三種把第二種也給蓋了
  }

  setRef = (input) => {
    // 第二種 給他一個函式 
    // this.myInput2 = input;//~把參考設在某個變數
    input.focus();//~或是直接用參考
  }

  render() {
    return (
      <div>
        <h2>Ref屬性讓你找到Dom(三招)</h2>
        <p>要讓他一開始進來就是focus狀態</p>
        <h3>enter your name</h3>
        <input type="text" ref="myInput1"/>
        <input type="text" ref={this.setRef}/>
        <input type="text" ref={this.myInput3}/>
      </div>
    )
  }
}

export default Input;