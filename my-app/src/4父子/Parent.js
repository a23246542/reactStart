import React, {createRef} from 'react';
import Child from './Child';
import StupidChild from './StupidChild'

class Parent extends React.Component {

  childRef = createRef();
  
  // const state = {}//@@本來就不用寫const 驚訝
  state = {
    count:0,
    stupidChildCount:0
  }

  addCount = () => {
    this.setState({
      count:this.state.count + 1,
    })
  }
  
  // 第三種子組件的狀態跟方法都在父組件身上
  addStupidChildCount = () => {
    this.setState({
      // stupidChildCount:this.state.childCount + 1,//%%變成讀取不到的undefined+1 變NaN
      stupidChildCount:this.state.stupidChildCount + 1,
    })
  }

  addChildCount = () => {
    this.childRef.current.addCount();
  }
  
  render() {
    return ( //@@Your render method should have return statement   react/require-render-return
      <div>
        <h2>父子溝通</h2>
        <h3>Parent:{this.state.count}</h3>
        <button type="button" onClick={this.addCount}>+Parent</button>
        <button type="button" onClick={this.addChildCount}>+Child</button>

        <Child ref={this.childRef} addParentCount={this.addCount}/>

        <StupidChild 
          count={this.state.stupidChildCount}
          addParentCount={this.addCount}
          addChildCount={this.addStupidChildCount}
        />
      </div>
    )
  }
}

export default Parent;