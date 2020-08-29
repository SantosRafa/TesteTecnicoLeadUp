import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';


//imports of pages
import Login from './src/pages/Login';
import Dashboard from './src/pages/Dashboard'

// import { Container } from './styles';

function Routes() {
  return(
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/dashboard" component={Dashboard}/>
    </BrowserRouter>
    );
}

export default Routes;
