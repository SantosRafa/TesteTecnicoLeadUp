import React from 'react';

import api from '../../services/api';


function DeleteModal({onClose , idArticle, id="modal"}) {

 function handleOutsideClick(e) {
    if(e.target.id === id){
      onClose();
    }
  }

  async function handleDelete(idArticle){
    await api.delete(`articles/${idArticle}`);
  }

  console.log(onClose);
  return (

  <div id={id} className="modal" onClick={ handleOutsideClick }>


      <div className="contentDeleteModal">
      <form>
        <h2>Tem certeza que deseja excluir ?</h2>
        <div className="buttonsAreaModel">
          <button onClick={()=>{handleDelete(idArticle)}}> SIM </button>
          <button onClick={()=>onClose}> NÃO </button>
        </div>
        </form>
      </div>

  </div>

  );
}

export default DeleteModal;
