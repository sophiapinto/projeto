import React from 'react';

import SignIn from '../../components/SignIn';
//import Header from '../../components/Header';
import logo from "../../assets/images/logo.png";

import './login.css';

function Login () {
  return (
    <div >
        <div className= "logo">
          <img src= {logo} alt="Senhora Vacina" />
        </div>

      <SignIn/>
    </div>
  );
}

export default Login;