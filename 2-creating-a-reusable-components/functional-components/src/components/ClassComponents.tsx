import React, { Component } from 'react';

// Define the state interface
interface CounterState {
  count: number;
}

// Create a class component
class ClassComponents extends Component<{}, CounterState> {
  constructor(props: {}) {
    super(props);
    // Initialize the state in the constructor
    this.state = {
      count: 0, // Set the initial count value
    };
  }

  // Method to increment the count
  incrementCount = (): void => {
    this.setState((prevState) => ({
      count: prevState.count + 1, // Increase the count by 1
    }));
  };

  // Method to decrement the count
  decrementCount = (): void => {
    this.setState((prevState) => ({
      count: prevState.count - 1, // Decrease the count by 1
    }));
  };

  // Render method to display the component
  render() {
    return (
      <div>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.incrementCount}>Increment</button>
        <button onClick={this.decrementCount}>Decrement</button>
      </div>
    );
  }
}

export default ClassComponents;