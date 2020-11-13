import React from "react";
import Weather from "./Weather";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello World
        </p>
        <Weather city="Paris" />
      </header>
    </div>
  );
}

export default App;
