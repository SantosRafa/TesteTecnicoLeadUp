import React from 'react';

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
          ENTRAR
        </button>
       </form>
     </div>
    </div>
  );
}

export default Login;
