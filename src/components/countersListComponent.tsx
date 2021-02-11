import * as React from "react";
import { Component } from "react";
import { Counter } from "./counterComponent";

interface CounterId {
  id: number;
  value: number;
}

interface CounterListProps {
  counters: CounterId[];
  onReset: () => void;
  onDelete: (id: number) => void;
  onIncrement: (counter: CounterId) => void;
}

export class CountersList extends Component<CounterListProps> {
  render() {
    return (
      <div className="container">
        <button
          className="btn btn-sm btn-primary m-2"
          onClick={this.props.onReset}
        >
          Reset
        </button>
        {this.props.counters.map((c) => (
          <Counter
            key={c.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={c}
          ></Counter>
        ))}
      </div>
    );
  }
}
