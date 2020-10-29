import React,{useContext} from 'react';
import context from './context';
import ModalLogin from './ModalLogin';

const Modal = () => {
  const {modal,setModal} = useContext(context);


  const differentModal = (modal) => {
    switch (modal) {
      case 'login':
        return <ModalLogin/>;
      default://%%
        return null;
    }

  }

  if(!modal) return null;
  return (
    /*@@裡面也會消失怎麼辦*/
    // <div className="modal" onClick={()=>setModal('')}>
    <div className="modal">
      <div className="modal-content">
        {/* {differentModal()} %%%%參數要從這邊給 */} 
        {differentModal(modal)}
      </div>
    </div>
  );
}

export default Modal;
