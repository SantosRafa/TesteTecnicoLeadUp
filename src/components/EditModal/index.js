import React, {useState} from 'react';
import api from '../../services/api';
// import { Container } from './styles';
import uploadIcon from '../../assets/uploadIcon.svg';


function EditModal({onClose = ()=>{}, idArticle, title, description, id="modal"}) {
  const [titleEdit, setTitleEdit] = useState('');
  const [descriptionEdit, setDescriptionEdit] = useState('');

  const handleOutsideClick = (e) => {
    if(e.target.id === id){
      onClose();
    }
  }
  console.log(idArticle);
  async function handleEdit(idArticle, titleEdit, descriptionEdit){
    console.log(idArticle);
    await api.put(`articles/${idArticle}`, {
      titleEdit,
      descriptionEdit
    });
  }
  return (

  <div id={id} className="modal" onClick={ {handleOutsideClick}}>
    <div className="content">
      <h2>EDITAR</h2>

      <form>
        <button id="close" onClick={()=>{onClose()}}/>
        <label id="labelTitulo"htmlFor="titulo">Título</label>
        <input
        type="text"
        placeholder="titulo"
        value={titleEdit}
        name="titulo"
        id="titulo"
        onChange={(e)=>setTitleEdit(e.target.value)}/>

        <label htmlFor="descricao">Descrição</label>
        <textarea type="text" value={descriptionEdit} onChange={(e)=>setDescriptionEdit(e.target.value)} name="descricao" id="descricao" placeholder="Descrição"/>

        <button>
          <img src={uploadIcon} alt="upload"/>
          IMAGEM
        </button>

        <button onClick={()=>{handleEdit(idArticle,titleEdit, descriptionEdit)}}>
          SALVAR
        </button>
      </form>
    </div>
  </div>

  );
}

export default EditModal;
