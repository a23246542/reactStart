import React from 'react';
import {connect} from 'react-redux';

const TodoList = (props) => {
  const {inputValue, changeInputValue} = props; //可以即時更新
  return (
    <div>
      <div>
        <input
          value = {inputValue}
          onChange={changeInputValue} //!!!@@?不用帶e
        />
        <button>提交</button>
      </div>
      <ul>
        <li>Dell</li>
      </ul>
    </div>
  );
}

const mapStateToProps = (state) =>({
  inputValue:state.inputValue
})

const mapDispatchToProps = (dispatch) =>({
  changeInputValue(e){
    console.log(e.target.value);
    // dispatch()
  }
})

// export default TodoList;
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);//!!這邊倒出connect變成容器組件 todoList變成包裹的ui組件
