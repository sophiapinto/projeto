import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import "./App.css";

import Home from './pages/Home';

ReactDOM.render(

  <BrowserRouter>

    <Switch>
      {/* Rotas Ativadas*/}
      <Route exact path= "/" component = {Home} />
    
    </Switch>
  </BrowserRouter>,
  
  document.getElementById("root")
);