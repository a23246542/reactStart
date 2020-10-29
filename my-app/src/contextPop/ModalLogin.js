import React,{useContext} from 'react';
import context from './context';

const ModalLogin = () => {

  const {setModal,setLogin} = useContext(context);

  const login = (e) => {
    e.preventDefault();
    setLogin(true);
    setModal('');
  }
  return (
    <div>
        <form onSubmit={login}>
          帳號:<input type="text"/>
          <br></br>
          密碼:<input type="text"/>
          <br/>
          <button type="submit">登陸</button>
        </form>
    </div>
  );
}

export default ModalLogin;
