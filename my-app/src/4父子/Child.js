import React from 'react';

class Child extends React.Component {
  state = {
    count:0
  }

  addCount = () => {
    this.setState({
      count:this.state.count + 1,
    })
  }
  render() {
    return ( //@@Your render method should have return statement   react/require-render-return
      <div>
        <h3>child:{this.state.count}</h3>
        <button type="button" onClick={this.props.addParentCount}>+Parent</button>
        <button type="button" onClick={this.addCount}>+Child</button>
      </div>
    )
  }
}
export default Child;
