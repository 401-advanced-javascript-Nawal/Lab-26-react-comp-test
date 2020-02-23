import React from 'react';

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
          <button id="b1" onClick={this.handleClickUp}>Click For Up</button>
          <button id="b2" onClick={this.handleClickDown}>Click For Down</button>
        </section>
      )
    }
  }

  export default Counter;