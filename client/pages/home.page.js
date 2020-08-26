import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  render = () => {
    return (
      <div>
        <h1>i'm from home page</h1>
        <Link to="/about">ke about gih</Link>
      </div>
    )
  }
}

export default HomePage;