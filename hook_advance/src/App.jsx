import './App.css';
import { useState } from 'react';
import UseEffect from './hook/UseEffect';
import UseCallback from './hook/UseCallback';
import UseMemo from './hook/UseMemo';
import UseRef from './hook/UseRef';
import { AppContext } from './components/context/AppContext';
import { Div } from './components/Div/index';
import UseReducer from './hook/UseReducer';
import UseReducerContext from './hook/UseReducerContext';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Custom from './page/Custom';
import MyHook from './hook/customHook/UseMyHook';

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
    <BrowserRouter>
      <div className="App">
        <header>
          <UseReducerContext>
            <AppContext>
              <h1>UseContext:</h1>
              <Div />
            </AppContext>
          </UseReducerContext>
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
        <MyHook />
        <Routes>
          <Route to="/custom" element={<Custom />} />
        </Routes>
        <Link to="/custom" element={<Custom />}>
          aqui
        </Link>
        <hr />
        <UseReducer />
        <hr />
        <UseEffect />
        <hr />
        <UseCallback />
        <hr />
        <UseMemo />
        <hr />
        <UseRef />
        <hr />
      </div>
    </BrowserRouter>
  );
}

export default App;
