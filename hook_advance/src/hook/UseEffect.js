import { useState, useEffect } from 'react';
const eventFn = () => {
  console.log('clicado!');
};
function UseEffect() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  /*
   * useEffect
   */
  // CompoenentDidUpdate - executa  toda vez que  o componente atualiza:
  useEffect(() => {
    console.log('componentDidUpdate');
  });
  // CompoenentDidMount - executa  uma 1x
  useEffect(() => {
    console.log('componentDidMount');
    //chains operation = ?. se tiver alguma coisa ele excuta caso contrario nao
    document.querySelector('h1')?.addEventListener('click', eventFn);
    // precisamos retorna algo para evitar lixo
    //ComponentWillUmount = limpeza
    return () => {
      document.querySelector('h1')?.removeEventListener('click', eventFn);
    };
  }, []);
  // Com dependencia - executa  toda vez que a dependencia mudar
  useEffect(() => {
    console.log('C1:', counter, 'C2:', counter2);
    //qualquer coisa que voce utilize de estado aqui dentro
    // vai ter que utilizar no array dependencia
  }, [counter, counter2]);
  return (
    <div>
      <h1>UseEffect:</h1>
      <h4>
        C1:{counter} C2:{counter2}{' '}
      </h4>
      <button onClick={() => setCounter(counter + 1)}>adicione +</button>
      <button onClick={() => setCounter2(counter2 + 1)}>adicione +(2)</button>
    </div>
  );
}

export default UseEffect;
