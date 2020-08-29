import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';


//imports of pages
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'

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
