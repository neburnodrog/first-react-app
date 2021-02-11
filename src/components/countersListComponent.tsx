import * as React from "react";
import { Component } from "react";
import { Counter, CounterId } from "./counterComponent";

class CountersList extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  render() {
    return (
      <>
        <button
          className="btn btn-sm btn-primary m-2"
          onClick={this.handleReset}
        >
          Reset
        </button>
        {this.state.counters.map((c) => (
          <Counter
            key={c.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={c}
          ></Counter>
        ))}
      </>
    );
  }

  handleReset = (): void => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId: number): void => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleIncrement = (counter: CounterId): void => {
    const counters = [...this.state.counters];
    /* spread operator to clone the counters array 
       Although the objects referenced remains the same */
    const index = counters.indexOf(counter);
    counters[index] = { ...counter }; // here we clone the object at specific index
    counters[index].value++; // we change the value on the cloned object
    this.setState({ counters });
  };
}

export default CountersList;
