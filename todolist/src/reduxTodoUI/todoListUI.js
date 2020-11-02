import React from 'react' ;
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

const TodoListUi = (props) => {
  const {input, hanldeInputChange,handleBtnClick,list,handleItemDelete} = props;
  return (
    <div>
        <div>
          {/* vue的話就要包"''"了 */}
          <Input
            value={input} 
            placeholder="todo info"
            style={{width: '300px',marginRight: '10px'}}
            onChange={hanldeInputChange}
          />
          <Button type="primary"
            onClick={handleBtnClick}
          >提交</Button>
        </div>
        <List style={{width:'300px',marginTop: '30px'}}
          // header={<div>Header</div>}
          // footer={<div>Footer</div>}
          bordered
          dataSource={list}
          renderItem={ (item, index) => ( //!!antd的設計方法 @@index呼叫不到
            <List.Item
              onClick={(index)=>{handleItemDelete(index); console.log(index);}}
            >
              {item}
            </List.Item>
          )}
      />
    </div>
  )
}

export default TodoListUi;

