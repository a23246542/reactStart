import React from 'react';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);//@@ 話說child沒有props也是ok啊
    // %%子组件里面装父组件的方法 但子组件方法也要记得绑this
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const {content} = this.props; 
    return (
      // index.js:1 Warning: Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state.
      // @@这些为舌么不能直接写上方法 //数据可以直接传 方法除了父组件要绑定this 子组件还要放入另外的函式?
      // <li onClick={this.props.delItem(this.props.index)}>
      <li onClick={this.handleClick}>
        {content}
      </li>
    )
  }

  handleClick() {
    const {delItem, index}  = this.props;
    delItem(index);
    // 等于
    // this.props.handleDelItem(this.props.index);
  }
}

export default TodoItem;