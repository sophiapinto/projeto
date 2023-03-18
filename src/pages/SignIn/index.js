import React from 'react';
//import Header from '../../components/Header';
import SignIn from '../../components/SignIn';
import logo from "../../assets/images/logo.png";

import './login.css';

function Home () {
  return (
    <div>
        <div className= "logo">
          <img src= {logo} alt="Senhora Vacina" />
        </div>

      <SignIn />
    </div>
  );
}

export default Home;