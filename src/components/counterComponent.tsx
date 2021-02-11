import * as React from "react";
import { Component } from "react";

interface CounterId {
  id: number;
  value: number;
}

interface CounterProps {
  counter: CounterId;
  onDelete: (id: number) => void;
  onIncrement: (counter: CounterId) => void;
}

export class Counter extends Component<CounterProps> {
  render() {
    const { counter, onDelete, onIncrement } = this.props;

    return (
      <div className="row my-3" id="counter">
        <div className="col">
          <span className={this.getBadgeClass()}>{this.formatCount()}</span>
          <button
            onClick={() => onIncrement(counter)}
            className="btn btn-light btn-sm"
          >
            Increment
          </button>
          <button
            onClick={() => onDelete(counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  getBadgeClass() {
    let classes = "badge-width badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}
