import React from 'react';
import './App.css';

// dummy component - it is also a functional component
const Header = () => {
  return (
    <header className="words-app">
      <h1> Counter World </h1>
    </header>
  )
}

// also a dummy component and functional component
const Footer = () => {
  return (
    <footer>React 1st App - Counter World </footer>
  )
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    // initial counter
    this.state = {
      counter: 0
    }
  }


  handleClickUp = e => {
    e.preventDefault();
    let counter = this.state.counter;
    counter++;
    this.setState({ counter });
  }

  handleClickDown = e => {
    e.preventDefault();
    let counter = this.state.counter;
    counter--;
    this.setState({ counter });
  }

  render() {
    return (
      <section>
        <h3>{this.state.counter}</h3>

        <button onClick={this.handleClickUp}>click for Up</button>
        <button onClick={this.handleClickDown}>click for Down</button>
      </section>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Counter />
        <Counter />
        <Footer />
      </React.Fragment>
    )
  }
}

export default App;
