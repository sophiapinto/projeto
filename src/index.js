import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import "./App.css";

import Cadastro from './pages/Cadastro';
import SignIn from './pages/SignIn';
import EsqueceuSenha from './pages/Esqueceu Senha';
import Home from './pages/Home';
import CadastroRealizado from './pages/CadastroRealizado';
import SenhaSolicitada from './pages/SenhaSolicitada';
import Selecao from './pages/Selecao';
import Aprazamento from './pages/Aprazamento';
import CadernetadeVacina from './pages/CadernetadeVacina';

ReactDOM.render(

  <BrowserRouter>

    <Switch>
      <Route exact path= "/" component = {Home} />
      <Route exact path= "/Login" component = {SignIn} />
      <Route exact path= "/Cadastro" component = {Cadastro} />
      <Route exact path= "/EsqueceuSenha" component = {EsqueceuSenha} />
      <Route exact path= "/CadastroRealizado" component = {CadastroRealizado} />
      <Route exact path= "/SenhaSolicitada" component = {SenhaSolicitada} />
      <Route exact path= "/Selecao" component = {Selecao} />
      <Route exact path= "/Aprazamento" component = {Aprazamento} />
      <Route exact path= "/CadernetadeVacina" component = {CadernetadeVacina} />

    </Switch>
  </BrowserRouter>,
  
  document.getElementById("root")
);