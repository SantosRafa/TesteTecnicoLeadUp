import React from 'react';

import './styles.css';

import logoLeadUp from '../../assets/logoLeadUp.svg';
import logoutIcon from '../../assets/logoutIcon.svg';
import addIcon from '../../assets/addIcon.svg'
import imageArticle from '../../assets/NodeJs1.png';
import editIcon from '../../assets/editIcon.svg';
import deleteIcon from '../../assets/deleteIcon.svg';

function Dashboard() {
  return (
    <div className="container">
     <header>
       <img src={logoLeadUp} alt="LeadUp"/>
       <button type="button">
        <img src={logoutIcon} alt="Sair"/>
        SAIR
       </button>
     </header>

     <div className="articlesContainer">
      <header>
       <h1>ARTIGOS</h1>
       <button type="button">
        <img src={addIcon} alt="Add"/>
        ADICIONAR
       </button>
      </header>
     </div>

     <div className="article">
       <div className="articleImg">
        <img src={imageArticle} alt="Foto do Artigo" width="250px"/>
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
        <img src={imageArticle} alt="Foto do Artigo" width="250px"/>
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
        <img src={imageArticle} alt="Foto do Artigo" width="250px"/>
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
    </div>
    );
}

export default Dashboard;
