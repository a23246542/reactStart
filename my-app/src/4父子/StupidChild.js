import React from 'react';

class StupidChild extends React.Component {
  // const { count, addParentCount, addChildCount} = this.props;//%% const @@未預期的語彙基元。必須是建構函式、方法、存取子或屬性。ts(1068)

  // state = {
  //   count:0
  // }

  // addCount = () => {
  //   this.setState({
  //     count:this.state.count + 1,
  //   })
  // }
  render() { //!!本組件就只有render 上面那些都不用
    const {count, addParentCount ,addChildCount} = this.props;
    return (
      <div>
        <h3>StpidChild:{count}</h3>
        <button type="button" onClick={addParentCount}>+Parent</button>
        <button type="button" onClick={addChildCount}>+Child</button>
      </div>
    )
  }
}
export default StupidChild;
