import React from 'react';
import {connect, useSelector, useDispatch} from 'react-redux';
import {getInputChangeAction} from './store/actionCreator';

const TodoList = (props) => {

  // const {inputValue, changeInputValue} = props; //可以即時更新

  // const inputValue = useSelector((state) => state.inputValue);
  const inputValue = useSelector((state) => {
    console.log(state);//@@為何執行兩次
    return state.inputValue
  });

  const dispatch = useDispatch();

  const changeInputValue = (e) => {
    dispatch(getInputChangeAction(e.target.value));
  }
  console.log('render?');
  
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

// const mapStateToProps = (state) =>({ //回傳給函式的props物件
//   inputValue:state.inputValue
// })

// const mapDispatchToProps = (dispatch) =>({ //回傳給函式的props物件
//   changeInputValue(e){
//     dispatch(getInputChangeAction(e.target.value))
//   }
// })

// export default connect(mapStateToProps,mapDispatchToProps )(TodoList);//!!這邊倒出connect變成容器組件 todoList變成包裹的ui組件
export default TodoList;
