import * as React from "react";
import { Component } from "react";
import { Counter } from "./counterComponent";
import { CounterId } from "../App";

interface CounterListProps {
  counters: CounterId[];
  onReset: () => void;
  onDelete: (id: number) => void;
  onIncrement: (counter: CounterId) => void;
}

export class CountersList extends Component<CounterListProps> {
  render() {
    const { onReset, onIncrement, onDelete, counters } = this.props;

    return (
      <div className="container">
        <button className="btn btn-sm btn-primary m-2" onClick={onReset}>
          Reset
        </button>
        {counters.map((c) => (
          <Counter
            key={c.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={c}
          ></Counter>
        ))}
      </div>
    );
  }
}
