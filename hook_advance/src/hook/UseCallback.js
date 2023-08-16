import P from 'prop-types';
import React, { useState, useCallback } from 'react';

const Button = React.memo(function Button({ incrementButton }) {
  console.log(' renderizou filho');
  return <button onClick={() => incrementButton(10)}> + </button>;
});

Button.propTypes = {
  incrementButton: P.func,
};

//useRef a gente utiliza para referencia elemento:
function UseRef() {
  const [counter, setCounter] = useState(0);

  // para evitar a recriação dessa função:
  // usarei useCallback quando função e mt complicada:
  const incrementCounter = useCallback((num) => {
    //para evitar podemos usar cb
    //assim não dependemos de counter
    setCounter((c) => c + num);
  }, []);
  /*
      sintaxe useCallback
        useCallback(função  ,[array depedencia])
      */
  console.log('renderizou Pai');
  return (
    <div>
      <h1>c1:{counter}</h1>
      <Button incrementButton={incrementCounter} />
    </div>
  );
}
export default UseRef;
