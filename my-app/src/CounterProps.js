import React from 'react';
import PropTypes from 'prop-types';

class Counter extends React.Component {

  static defaultProps = {
    initCount:0,
  }

  static propTypes = {
    initCount:PropTypes.number,
  }

  constructor(props) {
    super(props);
    state = { 
      count: props.initCount,
    };
  }

  addCounter = () => {
    this.setState({
      count:this.state.count + 1,
    })
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick = { this.addCounter }>+</button>
      </div>
    )
  };
}

Counter.defaultProps = {
  initCount:0,
}
// #寫在最後面
Counter.propTypes = {
  initCount:PropTypes.number,
}
export default Counter;