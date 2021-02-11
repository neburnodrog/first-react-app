import * as React from "react";
import { Component } from "react";

export interface CounterId {
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
    return (
      <div className="container">
        <div className="row my-3" id="counter">
          <div className="col">
            <span className={this.getBadgeClass()}>{this.formatCount()}</span>
            <button
              onClick={() => this.props.onIncrement(this.props.counter)}
              className="btn btn-light btn-sm"
            >
              Increment
            </button>
            <button
              onClick={() => this.props.onDelete(this.props.counter.id)}
              className="btn btn-danger btn-sm m-2"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  getBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}
