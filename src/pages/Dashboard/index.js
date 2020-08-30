import React, {useState, useEffect} from 'react';

import api from '../../services/api';
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
  const [articles, setArticles] = useState([]);

  useEffect(()=>{
    async function loadArticles(){
      const response = await api.get('/articles');

      setArticles(response.data)
    }

    loadArticles();

  },[]);


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
       <button type="button" onClick={()=>{console.log(articles[0]);
         setModalAddOpen(true)}}>
            {modalAddOpen ? <AddModal onClose={()=>{setModalAddOpen(false)}}/>: null}
        <img src={addIcon} alt="Add"/>
        ADICIONAR
       </button>
      </div>

     <div className="articlesContainer" >
       {articles.map((article =>(


          <div className="article" >

          <div className="articleImg" onClick={()=>{console.log(article)
            setModalArticleOpen(true)}}>
              {modalArticleOpen ?
              <ArticleModal
              title={article.title}
              description={article.description }
              onClose={()=>{setModalArticleOpen(false)}}/>: null}
            <img src={imageArticle} alt="Foto do Artigo" width="200px"/>
          </div>

          <div className="articleTitle">
            <h2>{article.title}</h2>
          </div>

          <div className="articleText">
            {article.description}
          </div>

          <div className="buttonsArea">
            <button type="button" onClick={()=>{setModalEditOpen(true)}}>
              {modalEditOpen ?
              <EditModal
              idArticle={article.id}
              title={article.title}
              description={article.description}
              onClose={()=>{setModalEditOpen(false)}}/>: null}
              <img src={editIcon} alt="Editar"/>
              EDITAR
            </button>

            <button onClick={()=>{setModalDeleteOpen(true)}}>
              {modalDeleteOpen ?
              <DeleteModal
              idArticle={article.id}
              onClose={()=>{setModalDeleteOpen(false)}}/>: null}

              <img src={deleteIcon} alt="Deletar"/>
              DELETAR
            </button>
          </div>

        </div>

       )))}



      </div>
    </div>

    );
}

export default Dashboard;
