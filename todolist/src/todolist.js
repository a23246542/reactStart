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
    this.getTodoItems = this.getTodoItems.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    // this.handleDelItem = this.handleDelItem.bind(this); //!!名词改用后缀
    this.handleItemDel = this.handleItemDel.bind(this);
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
            onChange={this.handleInputChange}
          >
          </input>
          <button
            onClick={this.handleBtnClick}
          >
            提交
          </button>
        </div>
        <ul>
          {/* {
            this.state.list.map((item, index) =>{
              // return <li key={index}>{item}</li>
              return ( //@@老師說代碼做個格式化 加上()差在哪?
                // <li  
                //   key={index}
                //   dangerouslySetInnerHTML = {{__html:item}} //%%兩個底線
                //   onClick = { this.handleDelItem.bind(this, index) }
                // >
                // </li>
                <TodoItem 
                  key={index}
                  content={item}
                  index={index}
                  delItem = {this.handleDelItem}
                ></TodoItem>
              )
            })
          } */}

          {/*%%事件绑定才不会刮号 回传数据要刮号 index.js:1 Warning: Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it. */}
          {/* {this.getTodoItems } */}

          {this.getTodoItems()}
        </ul>
      </Fragment>
    )
  }
  getTodoItems() { //@@ 其实不太懂 直接写 不是function XX才可以吗
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={index}
          content={item}
          index={index}
          delItem = {this.handleItemDel}
        />
      )
    })
  }

  handleInputChange(e) {
    // 第一坑
    console.log(e.target.value);//正確的值
    console.log(this.state.inputValue);//但state的資料沒變化 不會重新調用render()渲染畫面
    // this.state.inputValue = e.target.value //會失敗
    // this是undefined  改用bind可以綁定這個函式的this
    // 第二坑 沒用setState
    // this.state.inputValue  = e.target.value; //

    // this.setState({
    //   inputValue: e.target.value,
    // })

    const value = e.target.value;//%%
    this.setState((e)=>({ //!刮号是要回传的东西 代替{return 物件} %%忘记写e 虽然没报错
        inputValue:value
    }))
  }

  handleBtnClick() {
    // this.setState({
    //   list:[...this.state.list,this.state.inputValue],
    //   inputValue:''
    // })

    this.setState((prevState)=>{ //!可对比上面纯刮号
      // return({
      //   list:[...prevState.list,prevState.inputValue],
      //   inputValue:'',
      // })
      return { //@@所以直接返回对象就好
        list:[...prevState.list,prevState.inputValue],
        inputValue:'',
      }
    })
  }

  handleItemDel(index) {
    // const list = [...this.state.list];
    // list.splice(index,1);
    // this.setState({
    //   list:list,
    // })

    this.setState((prevState) => {
      const list = [...prevState.list,prevState.inputValue];
      list.splice(index,1);
      // return({ // @@好像也可以
      //   list //es6物件缩写
      // })
      return{list}
    }) 
  }

  // immutable的概念 不允許state做任何的改變 拷貝一個副本修改做替換
  // 可以改 但後面性能優化的時候會有問題
}

export default TodoList;