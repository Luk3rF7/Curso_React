import React, { useReducer } from 'react';

const globalState = {
  title: 'O titulo useReducer',
  body: 'O corpo do use Reducer',
  counter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'muda':
      console.log('chamou muda', action.payload);
      return { ...state, title: action.payload };
    case 'inverter': {
      console.log('Chamou inverter');
      const { title } = state;
      return { ...state, title: title.split('').reverse().join('') };
    }
  }
  return {
    ...state,
  };
};

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, globalState);
  const { counter, title, body } = state;
  return (
    <div>
      <h1>useReducer sem useContext</h1>
      <h2>
        {title} {counter}
      </h2>
      <p>{body}</p>
      {/*
        action do reducer são type e payload
        type e tipo
        payload são dados que quero enviar para dentro do reducer
      */}
      <button
        onClick={() =>
          dispatch({
            type: 'muda',
            payload: new Date().toLocaleString('pt-br'),
          })
        }
      >
        Click !
      </button>
      <button onClick={() => dispatch({ type: 'inverter' })}>
        inverta o titulo !
      </button>
    </div>
  );
}

export default UseReducer;
