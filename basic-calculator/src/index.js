import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ScotchInfoBar from './ScotchInfoBar';
import './styles.css';

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [total, setTotal] = useState(0);

  const calculateTotal = (e) => {
    console.log(e.target.innerHTML)
    switch (e.target.innerHTML) {
      case "Multiply Them!":
        setTotal(num1 * num2);
        break;
      case "Add Them!":
        setTotal(num1 + num2);
        break;
      case "Divide Them!":
        setTotal(num1 / num2);
        break;
      case "Subtract Them!":
        setTotal(num1 - num2);
        break;
      default:
        alert("No action here!")
    }
  }

  return (
    <div className="App">
      <h1>Adding Two Numbers</h1>

      <div className="number-inputs">
        <input 
          type="number" 
          placeholder="0" 
          onChange={(e) => setNum1(+e.target.value)}
        />
        <input 
          type="number" 
          placeholder="0"
          onChange={(e) => setNum2(+e.target.value)}
        />
      </div>

      <button onClick={calculateTotal}>Add Them!</button>
      <button onClick={calculateTotal}>Subtract Them!</button>
      <button onClick={calculateTotal}>Multiply Them!</button>
      <button onClick={calculateTotal}>Divide Them!</button>


      <h2>{total}</h2>

      <ScotchInfoBar seriesNumber={5} />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
