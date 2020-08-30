import React, {useState} from 'react';

// import { Container } from './styles';
import api from '../../services/api';
import uploadIcon from '../../assets/uploadIcon.svg';


function AddModal({onClose = ()=>{}, id="modal"}) {


  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');



  function handleAddArticle(title, description){
    api.post('/articles', {
      title,
      description
    });
  }

  return (

  <div id={id} className="modal" >
    <div className="content">
      <h2>CRIAR</h2>

      <form>
        <button id="close" onClick={()=>{onClose()}}/>
        <label id="labelTitulo"htmlFor="titulo">Título</label>
        <input
        type="text"
        value = {title}
        onChange={(e)=>setTitle(e.target.value)}
        name="titulo"
        id="titulo"
        placeholder="Título"/>

        <label htmlFor="descricao">Descrição</label>
        <textarea
        type="text"
        name="descricao"
        id="descricao"
        placeholder="Descrição"
        value = {description}
        onChange={(e)=>setDescription(e.target.value)}
        />

        <button>
          <img src={uploadIcon} alt="upload"/>
          IMAGEM
        </button>

        <button onClick={()=>handleAddArticle(title, description)}>
          SALVAR
        </button>
      </form>
    </div>
  </div>

  );
}

export default AddModal;
