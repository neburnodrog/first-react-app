import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { CountersList } from "./components/countersListComponent";
import Clock from "./components/clockComponent";
import { NavComponent } from "./components/navComponent";

interface CounterId {
  id: number;
  value: number;
}

interface AppState {
  counters: CounterId[];
}

class App extends React.Component {
  state: AppState = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

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

  render() {
    return (
      <>
        <NavComponent
          totalProducts={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="main-container">
          <img src={logo} className="App-logo" alt="logo" />
          <Clock />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learning React
          </a>
          <CountersList
            onIncrement={this.handleIncrement}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </>
    );
  }
}

export default App;
