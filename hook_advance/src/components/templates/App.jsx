import './App.css';
import { AppContext } from '../../context/AppContext/index';
import { PostsProvider } from '../../context/PostsProvider/PostProvider';
import { CounterProvider } from './../../context/CounterProvider/ExampleProvider';
import { useState } from 'react';
import { Posts } from '../Posts/Posts';
import { Div } from '../Div/index';
import UseEffect from '../../hook/UseEffect';
import UseCallback from '../../hook/UseCallback';
import UseMemo from '../../hook/UseMemo';
import UseRef from '../../hook/UseRef';
import UseReducer from '../../hook/UseReducer';
import UseReducerContext from '../../hook/UseReducerContext';
import MyHook from '../../hook/customHook/UseMyHook';

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
        <CounterProvider>
          <PostsProvider>
            <Posts />
          </PostsProvider>
        </CounterProvider>
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
  );
}

export default App;
