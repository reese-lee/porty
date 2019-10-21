import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

export class Home extends Component {

  render () {
    return (
      <div>
          <div>
          <h1 class="header"><Link class="link" to="/menu">Get on top.</Link></h1>
          </div>
          
      
      </div>
    );
  }
}
