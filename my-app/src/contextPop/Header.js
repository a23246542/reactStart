import React,{useContext} from 'react';
import context from './context';

const Header = () => {
  const {setModal} = useContext(context)
  const loginModal = (e) => {
    e.preventDefault();
    setModal('login');
  }
  return (
    <div className="header">
      <span>
        <a href="#" onClick={loginModal}>login</a>
      </span>
    </div>
  );
}

export default Header;
