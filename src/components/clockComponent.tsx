import * as React from 'react';
import { Component } from 'react';

class Clock extends Component {
  state = {
    localTime: "",
  }

  render() {
    return (
      <p>
        It is {new Date().toLocaleTimeString()}
      </p >
    );
  }

  setLocalTime() {
    let newLocalTime = new Date().toLocaleTimeString();
    this.setState({ localTime: newLocalTime })
  }

}

export default Clock;
