import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
   state = {}
   render() {
      return (
         <div>
            <h2>Bem-vindo à página Home</h2> <br/>
         <Link to="/sobre">Sobre</Link>
         </div>
      );
   }
}

export default Home;