import React, { Component } from 'react';

import Header from './header';
import Card from './card';

class Home extends Component {
  render() {
    return (
      <div className="home">
        { Header() }
        <Card />
      </div>
    );
  }
}

// things we need to fix
// placeholder
// gray and green number labels
// content labels
// generate btn space/card height

export default Home;