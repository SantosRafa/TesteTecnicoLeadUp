import React, {useState} from 'react';


import EditModal from '../../components/EditModal';


import imageArticle from '../../assets/NodeJs1.png';
import editIcon from '../../assets/editIcon.svg';
import deleteIcon from '../../assets/deleteIcon.svg';


function ArticleModal({onClose = ()=>{}, id="modal"}) {

  const [modalEditOpen, setModalEditOpen] = useState(false);

  const handleOutsideClick = (e) => {
    if(e.target.id === id){
      onClose();
    }
  }

  return (

  <div id={id} className="modal" onClick={ {handleOutsideClick}}>
    <div className="contentArticleModal">
      <form>
        <button id="closeArticleModel" onClick={()=>{onClose()}}/>
          <div className="headerArticle">
            <img src={imageArticle} alt="foto" width="150px"/>

          </div>
          <div className="ArticleText">

            <h2>Títullo do artigo </h2>

            <div className="textArticle">
              <p>hsabagbsdivabsdivbasidvgbas
                idufgvaosdvgasgvaiugfvaiufgviug</p>
            </div>

            <div className="buttonsAreaModel">
              <button onClick={()=>{setModalEditOpen(true)}}>
            {modalEditOpen ? <EditModal onClose={()=>{setModalEditOpen(false)}}/> : null}

              <img src={editIcon} />
                EDITAR
              </button>

              <button onClick={()=>onClose}>
              <img src={deleteIcon} />
               DELETAR
              </button>
            </div>
          </div>




      </form>
    </div>
  </div>

  );
}

export default ArticleModal;
