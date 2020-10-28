import React from 'react';
import { Provider } from './context/contextOpen';
import Button from './contextOpenButton';

class ContextButton extends React.Component {
  constructor(props) {
    super(props);
    // const state = {%%
    // state = { //  %%'state' is not defined  no-undef
    this.state = {
      open: false
    }
  }

  toggle  = () => {
    this.setState({
      open:!this.state.open,
    })
  }

  render() {
    const { open }  = this.state;
    const contextValue = {
      open,
      toggle:this.toggle,
    }
    return (
      <Provider value = {contextValue}>
        <div>
          <h2>contextApi</h2>
          {/* <Button value = {contextValue}/> */}
          <Button/>
          {open && <p>something....</p>}
        </div>
      </Provider>
    )
  }
}

export default ContextButton;