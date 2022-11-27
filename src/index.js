import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import "./App.css";
import Cadastro from './components/Cadastro';
import SignIn from './components/SignIn';
import EsqueceuSenha from './components/EsqueceuSenha';

ReactDOM.render(

  <BrowserRouter>

    <Switch>
      {/* Rotas Ativadas*/}
      <Route exact path= "/" component = {SignIn} />
      <Route exact path= "/Cadastro" component = {Cadastro} />
      <Route exact path= "/EsqueceuSenha" component = {EsqueceuSenha} />

    </Switch>
  </BrowserRouter>,
  
  document.getElementById("root")
);