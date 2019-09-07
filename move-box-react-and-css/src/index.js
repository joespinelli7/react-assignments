import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function App() {
  const [offsetTopY, setOffsetTopY] = useState(300);
  const [box, setBox] = useState('');
  const [offsetTopX, setOffsetTopX] = useState(300);
  // const [boxX, setBoxX] = useState('');

  const moveBoxUp = () => {
    setOffsetTopY(offsetTopY - 50);
    setBox("boxY");
  };

  const moveBoxDown = () => {
    setOffsetTopY(offsetTopY + 50);
    setBox("boxY");
  };

  const moveBoxRight = () => {
    setOffsetTopX(offsetTopX + 50);
    setBox("boxX");
  };

  const moveBoxLeft = () => {
    setOffsetTopX(offsetTopX - 50);
    setBox("boxX");
  };

  return (
    <div className="App">
      <h1>Move the Box!</h1>

      {/* handle the click event on these buttons */}
      <button onClick={moveBoxUp}> Move Up </button>
      <button onClick={moveBoxLeft} className="leftbox"> Move Left </button>
      <button onClick={moveBoxRight} className="rightbox"> Move Right </button>
      <button onClick={moveBoxDown}> Move Down </button>

      {/* move this box using inline styles */}
      <div
        className="box"
        style={{transform: `translate(${offsetTopX}px, ${offsetTopY}px)` }}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
