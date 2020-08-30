import React, {useState} from 'react';

import EditModal from '../../components/EditModal';
import DeleteModal from '../../components/DeleteModal';
import ArticleModal from '../../components/ArticleModal';
import AddModal from '../../components/AddModal';
import './styles.css';

import logoLeadUp from '../../assets/logoLeadUp.svg';
import logoutIcon from '../../assets/logoutIcon.svg';
import addIcon from '../../assets/addIcon.svg'
import imageArticle from '../../assets/NodeJs1.png';
import editIcon from '../../assets/editIcon.svg';
import deleteIcon from '../../assets/deleteIcon.svg';

function Dashboard() {
  const [modalEditOpen, setModalEditOpen] = useState(false);
  const [modalAddOpen, setModalAddOpen] = useState(false);
  const [modalDeleteOpen, setModalDeleteOpen] = useState(false);
  const [modalArticleOpen, setModalArticleOpen] = useState(false);

  return (
    <div className="container">
     <header>
       <img src={logoLeadUp} alt="LeadUp"/>
       <button type="button">
        <img src={logoutIcon} alt="Sair"/>
        SAIR
       </button>
     </header>


     <div className="headerArticles">
       <h1>ARTIGOS</h1>
       <button type="button" onClick={()=>{setModalAddOpen(true)}}>
            {modalAddOpen ? <AddModal onClose={()=>{setModalAddOpen(false)}}/>: null}
        <img src={addIcon} alt="Add"/>
        ADICIONAR
       </button>
      </div>

     <div className="articlesContainer" >
      <div className="article" >

        <div className="articleImg" onClick={()=>{setModalArticleOpen(true)}}>
            {modalArticleOpen ? <ArticleModal onClose={()=>{setModalArticleOpen(false)}}/>: null}
          <img src={imageArticle} alt="Foto do Artigo" width="200px"/>
        </div>

        <div className="articleTitle">
          <h2>Lorem ipsun dolor sit amet</h2>
        </div>

        <div className="articleText">
          loremajsbpiagpsidhbausdfhaodasdf asdhaúdghgbauh
        </div>

        <div className="buttonsArea">
          <button type="button" onClick={()=>{setModalEditOpen(true)}}>
            {modalEditOpen ? <EditModal onClose={()=>{setModalEditOpen(false)}}/>: null}
            <img src={editIcon} alt="Editar"/>
            EDITAR
          </button>

          <button onClick={()=>{setModalDeleteOpen(true)}}>
            {modalDeleteOpen ? <DeleteModal onClose={()=>{setModalDeleteOpen(false)}}/>: null}
            <img src={deleteIcon} alt="Deletar"/>
            DELETAR
          </button>
        </div>

      </div>

      <div className="article">
        <div className="articleImg">
          <img src={imageArticle} alt="Foto do Artigo" width="200px"/>
        </div>

        <div className="articleTitle">
          <h2>Lorem ipsun dolor sit amet</h2>
        </div>

        <div className="articleText">
          loremajsbpiagpsidhbausdfhaodasdf asdhaúdghgbauh
        </div>

        <div className="buttonsArea">
          <button type="button">
            <img src={editIcon} alt="Editar"/>
            EDITAR
          </button>

          <button type="button">
            <img src={deleteIcon} alt="Deletar"/>
            DELETAR
          </button>
        </div>

      </div>

      <div className="article">
        <div className="articleImg">
          <img src={imageArticle} alt="Foto do Artigo" width="200px"/>
        </div>

        <div className="articleTitle">
          <h2>Lorem ipsun dolor sit amet</h2>
        </div>

        <div className="articleText">
          loremajsbpiagpsidhbausdfhaodasdf asdhaúdghgbauh
        </div>

        <div className="buttonsArea">
          <button type="button">
            <img src={editIcon} alt="Editar"/>
            EDITAR
          </button>

          <button type="button">
            <img src={deleteIcon} alt="Deletar"/>
            DELETAR
          </button>
        </div>

      </div>

      <div className="article">
        <div className="articleImg">
          <img src={imageArticle} alt="Foto do Artigo" width="200px"/>
        </div>

        <div className="articleTitle">
          <h2>Lorem ipsun dolor sit amet</h2>
        </div>

        <div className="articleText">
          <p>loremajsbpiagpsidhbausdfhaodasdf asdhaúdghgbauh</p>
        </div>

        <div className="buttonsArea">
          <button type="button">
            <img src={editIcon} alt="Editar"/>
            EDITAR
          </button>

          <button type="button">
            <img src={deleteIcon} alt="Deletar"/>
            DELETAR
          </button>
        </div>

      </div>
      </div>
    </div>

    );
}

export default Dashboard;
