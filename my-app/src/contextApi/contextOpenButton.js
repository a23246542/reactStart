import React from 'react';
import {Consumer} from './context/contextOpen';

class ContextOpenButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //##原本傳props的方法
    // const {open, toggle} = this.props.value;
    return (
      // <button onClick={toggle}>{`${open}`}</button>  
    <Consumer>
      {/* {(value)=>(  !!可以解構*/}
      {({open,toggle})=>(
        <button onClick={toggle}>{open ? 'close' : 'open'}</button>  
      )}
    </Consumer>  
    )
  }
}

export default ContextOpenButton;