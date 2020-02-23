import React from 'react';
import Header from './moduls/Header.js';
import Footer from './moduls/Footer.js';
import Counter from './moduls/Counter.js';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        {/* <Counter /> */}
        <Footer />
      </React.Fragment>
    )
  }
}

export default App;
