import React from 'react';

import SignIn from '../../components/SignIn';
import Footer from '../../components/Footer'
import Header from '../../components/Header';

function Login () {
  return (
    <div >
      <Header />

      <SignIn/>

      <Footer/>
    </div>
  );
}

export default Login;