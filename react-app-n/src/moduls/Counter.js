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
          <button onClick={this.handleClickUp}>click for Up</button>
          <button onClick={this.handleClickDown}>click for Down</button>
        </section>
      )
    }
  }

  export default Counter;