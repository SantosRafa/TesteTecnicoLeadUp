import React from 'react';

// import { Container } from './styles';


function DeleteModal({onClose , id="modal"}) {

 function handleOutsideClick(e) {
    if(e.target.id === id){
      onClose();
    }
  }
  console.log(onClose);
  return (

  <div id={id} className="modal" onClick={ handleOutsideClick }>


      <div className="contentDeleteModal">
      <form>
        <h2>Tem certeza que deseja excluir ?</h2>
        <div className="buttonsAreaModel">
          <button onClick={()=>{}}> SIM </button>
          <button onClick={()=>onClose}> NÃO </button>
        </div>
        </form>
      </div>

  </div>

  );
}

export default DeleteModal;
