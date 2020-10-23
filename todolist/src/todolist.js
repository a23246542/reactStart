import React, {Fragment} from 'react';
import TodoItem from './todoItem';

class TodoList extends React.Component {
  constructor(props){ // 最優先執行函數
    super(props);
    this.state = { //@@之前委楊老師沒寫在constrol阿
      inputValue: 'hello',//!寫死了就不能動了
      inputValue: '',//!沒有雙向綁定
      list: ['學習英文','學習react'],
      //接下來綁定好了 要怎麼實現新增刪除功能 別館dom了 只要想怎麼把inputValue放進list就行了
    }
  }
  render() {
    return (
      <Fragment>
        <h1>todoList</h1>
        <div>
          {/* 大寫是組件 小寫是元素 */}
          {
            //用單行註釋要單獨放在一行裡面
          }
          <input
            type="text" value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
          >
          </input>
          <button
            onClick={this.handleBtnClick.bind(this)}
          >
            提交
          </button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) =>{
              // return <li key={index}>{item}</li>
              return ( //@@老師說代碼做個格式化 加上()差在哪?
                // <li  
                //   key={index}
                //   dangerouslySetInnerHTML = {{__html:item}} //%%兩個底線
                //   onClick = { this.handleDelItem.bind(this, index) }
                // >
                //     {/* {item} */}
                // </li>
                <TodoItem 
                  key={index}
                  content={item}
                  index={index}
                  delItem = {this.handleDelItem.bind(this)}
                ></TodoItem>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }

  handleInputChange(e) {
    // 第一坑
    console.log(e.target.value);//正確的值
    console.log(this.state.inputValue);//但state的資料沒變化 不會重新調用render()渲染畫面
    // this.state.inputValue = e.target.value //會失敗
    // this是undefined  改用bind可以綁定這個函式的this
    // 第二坑 沒用setState
    // this.state.inputValue  = e.target.value; //
    this.setState({
      inputValue: e.target.value,
    })
  }

  handleBtnClick() {
    this.setState({
      list:[...this.state.list,this.state.inputValue],
      inputValue:''
    })
  }

  handleDelItem(index) {
    const list = [...this.state.list];
    list.splice(index,1);
    this.setState({
      list:list,
    })
  }

  // immutable的概念 不允許state做任何的改變 拷貝一個副本修改做替換
  // 可以改 但後面性能優化的時候會有問題
}

export default TodoList;