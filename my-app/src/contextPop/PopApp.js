import React,{useState} from 'react';
import Header from './Header';
import Modal from './Modal';
import "./style.css";
import context,{Provider} from './context';

const PopApp = () => {
  const [modal, setModal] = useState('');
  const [login,setLogin] = useState(false);

  const contextValue = {
    modal,
    setModal,
    login,
    setLogin
  }
  return (
    <Provider value={contextValue}>
      <div className="App">
        <Header/>
        <Modal/>
      </div>
    </Provider>  
  );
}

export default PopApp;
