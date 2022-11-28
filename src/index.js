import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import "./App.css";

import Cadastro from './pages/Cadastro';
import SignIn from './pages/SignIn';
import EsqueceuSenha from './pages/Esqueceu Senha';
import Home from './pages/Home';

ReactDOM.render(

  <BrowserRouter>

    <Switch>
      <Route exact path= "/" component = {Home} />
      <Route exact path= "/Login" component = {SignIn} />
      <Route exact path= "/Cadastro" component = {Cadastro} />
      <Route exact path= "/EsqueceuSenha" component = {EsqueceuSenha} />

    </Switch>
  </BrowserRouter>,
  
  document.getElementById("root")
);