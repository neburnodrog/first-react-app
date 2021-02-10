import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CountersList from "./components/countersListComponent";
import Clock from "./components/clockComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Clock />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <CountersList />
      </header>
    </div>
  );
}

export default App;
