import React from 'react';
import {Link} from 'react-router-dom';

import logoLeadUp from '../../assets/logoLeadUp.svg'

import './styles.css';

function Login() {
  return (
    <div className="container">
     <div className="formContainer">
       <img src={logoLeadUp} alt="LeadUp"/>
       <form>
        <label htmlFor="email"/>
        <input type="text" name="E-mail" id="email" placeholder="E-mail"/>

        <label htmlFor="password"/>
        <input type="text" name="password" id="password" placeholder="Senha"/>

        <button type="button">
          <Link to="/dashboard">
          ENTRAR
          </Link>
        </button>
       </form>
     </div>
    </div>
  );
}

export default Login;
