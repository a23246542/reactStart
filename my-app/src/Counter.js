import React from 'react';

class Counter extends React.Component {
  state = { //??怎麼知道是state 定義在這個這個組件的狀態
    count: 0,
  };

  addCounter = () => {
    this.setState({
      // count:this.state.count++,//%%@@這樣不行
      count:this.state.count + 1,
    })
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        {/* <button onClick = { this.addCounter() }>+</button> 不用括號 */}
        <button onClick = { this.addCounter }>+</button>
      </div>
    )
  }

}

export default Counter;