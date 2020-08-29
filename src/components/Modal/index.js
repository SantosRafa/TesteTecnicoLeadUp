import React from 'react';

// import { Container } from './styles';
import uploadIcon from '../../assets/uploadIcon.svg';

import './styles.css';
function Modal({onClose = ()=>{}, id="modal"}) {

  const handleOutsideClick = (e) => {
    if(e.target.id === id){
      onClose();
    }
  }

  return (

  <div id={id} className="modal" onClick={ {handleOutsideClick}}>
    <div className="content">
      <h2>EDITAR</h2>

      <form>
        <button id="close" onClick={()=>{onClose()}}/>
        <label id="labelTitulo"htmlFor="titulo">Título</label>
        <input type="text" name="titulo" id="titulo" placeholder="Título"/>

        <label htmlFor="descricao">Descrição</label>
        <textarea type="text" name="descricao" id="descricao" placeholder="Descrição"/>

        <button>
          <img src={uploadIcon} alt="upload"/>
          IMAGEM
        </button>

        <button>
          SALVAR
        </button>
      </form>
    </div>
  </div>

  );
}

export default Modal;
