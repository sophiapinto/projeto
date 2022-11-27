import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import "./App.css";
import SignIn from './components/SignIn';

ReactDOM.render(

  <BrowserRouter>

    <Switch>
      {/* Rotas Ativadas*/}
      <Route exact path= "/" component = {SignIn} />
    
    </Switch>
  </BrowserRouter>,
  
  document.getElementById("root")
);