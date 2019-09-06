import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [name, setName] = useState("John Doe");
  const [age, setAge] = useState(0);

  return (
    <div className="App">
      <div>
        <h2 className="subtitle is-4">Update Data from an input</h2>
      </div>

      <div className="input-display">
        <h3>Display Name: {name}</h3>
        <h3>Display Age: {age}</h3>
      </div>

      <div className="inputs">
      {/* Input name */}
        <div className="field">
          <label className="label">Name: </label>
          <input
            className="input"
            type="text"
            placeholder="Name here"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="field">
          <label className="label">Age: </label>
          <input
            className="input"
            type="number"
            placeholder="Age here"
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
