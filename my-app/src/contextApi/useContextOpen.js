import React,{useState} from 'react';
import { Provider } from './context/context';
// import Button from './contextOpenButton';//TypeError: Cannot destructure property 'open' of 'undefined' as it is undefined.
import Button from './useContextOpenButton';

const ContextButton = () => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     open: false
  //   }
  // }

  // const {open, setOpen} = useState(false) //%%TypeError: setOpen is not a function
  const [open,setOpen] = useState(false);
  // toggle  = () => {
  const toggle  = () => {
    // this.setState({
    //   open:!this.state.open,//原本是整個物件
    // })
    setOpen(!open);
  }

    // const { open }  = this.state;
    const contextValue = {
      open,
      // toggle:this.toggle,
      toggle,
    }    
    return (
      <Provider value = {contextValue}>
        <div>
          <h2>useContext</h2>
          <Button/>
          {open && <p>something....</p>}
        </div>
      </Provider>
    )
}

export default ContextButton;