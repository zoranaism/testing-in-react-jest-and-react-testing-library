import React from "react";
import "./App.css";
import Button from "./components/button/button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button label="click me please"></Button>
        <div class="foo">bar</div>
      </header>
    </div>
  );
}

export default App;
