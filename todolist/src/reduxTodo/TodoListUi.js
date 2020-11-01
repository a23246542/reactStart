import React,{useState}from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store  from './store';

// const data = [
//   'Racing car sprays burning fuel into crowd.',
//   'Japanese princess to wed commoner.',
//   'Australian walks 100km after outback crash.',
//   'Man charged over missing wedding girl.',
//   'Los Angeles battles huge wildfires.',
// ];

// const data = store.getState(); //nonIterableSpread.js:2 Uncaught TypeError: Invalid attempt to spread non-iterable instance.


const TodoListUi = () => {

  // const data = store.getState();//%%%react 不能直接在function component有資料 nonIterableSpread.js:2 Uncaught TypeError: Invalid attempt to spread non-iterable instance.
  const [input, setInput] = useState(store.getState().inputValue);
  const [list, setList] = useState(store.getState().list);
  // store.subscribe(handleStoreChange);//@@ReferenceError: Cannot access 'handleStoreChange' before initialization

  const hanldeInputChange = (e) => { //存到store
    // console.log(e.target.value);
    const action = {
      type:'change_input_value',
      value:e.target.value
    }
    store.dispatch(action);
  }

  const handleStoreChange = () => { //拿回store資料 更新dom
    setInput(store.getState().inputValue);
  }
  store.subscribe(handleStoreChange);//!!!!!%%%放在後面才吃得到
  return (
    <div>
      <div>
        {/* vue的話就要包"''"了 */}
        <Input 
          value={input} 
          placeholder="todo info"
          onChange={hanldeInputChange}
          style={{width: '300px',marginRight: '10px'}}
        />
        <Button type="primary">提交</Button>
      </div>
      <List  style={{width:'300px',marginTop: '30px'}}
        // header={<div>Header</div>}
        // footer={<div>Footer</div>}
        bordered
        dataSource={list}
        renderItem={item => (
          <List.Item>
            {item}
          </List.Item>
        )}
    />
    </div>
  );
}

export default TodoListUi;
