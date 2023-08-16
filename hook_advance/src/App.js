import './App.css';
import { useState } from 'react';
import UseEffect from './hook/UseEffect';
import UseCallback from './hook/UseCallback';
import UseMemo from './hook/UseMemo';

function App() {
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const reverseClass = reverse ? 'reverse' : '';

  const handleClick = () => {
    setReverse(!reverse);
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      <header>
        <h1>UseState :</h1>
        <h4>Contador: {counter}</h4>
        <p>
          <button type="button" onClick={handleClick}>
            Reverse {reverseClass}
          </button>
        </p>
        <p>
          <button type="button" onClick={handleIncrement}>
            Increment {counter}
          </button>
        </p>
      </header>
      <hr />
      <UseEffect />
      <hr />
      <UseCallback />
      <hr />
      <UseMemo />
      <hr />
    </div>
  );
}

export default App;
