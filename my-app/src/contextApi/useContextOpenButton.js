import React,{useContext} from 'react';
// import {Consumer} from './context/contextOpen';
import context from './context/context';

// class ContextOpenButton extends React.Component {
const ContextOpenButton = (props) =>{
  // constructor(props) {
  //   super(props);
  // }
  // const {open,setOpen}  = useContext(context)//%%不是setOpen
  const {open,toggle}  = useContext(context)
  // render() {
    return (
    // <Consumer>
    //   {({open,toggle})=>(
    //     <button onClick={toggle}>{open ? 'close' : 'open'}</button>  
    //   )}
    // </Consumer>  
    <button onClick={toggle}>{open ? 'close' : 'open'}</button>
    )
  // }
}

export default ContextOpenButton;