import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer'
import { Link } from "react-router-dom";

function Home () {
  return (
    <div>
      <Header />,

      <Link to="/Login">
        <h1 style={{height: "800px", textAlign: "center", color: "#FFFEFE"}}>
          CALENDÁRIO VACINAL
        </h1>      
      </Link>
      <Footer />
      
    </div>
  );
}

export default Home;