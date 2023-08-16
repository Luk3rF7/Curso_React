import React, { useEffect, useRef, useState } from 'react';

const useCustomHook = (cb, delay = 1000) => {
  const saveCb = useRef();

  useEffect(() => {
    saveCb.current = cb;
  }, [cb]);
  useEffect(() => {
    const intervalo = setInterval(() => {
      saveCb.current();
    }, delay);
    return () => clearInterval(intervalo);
  }, [delay]);
};

export default function MyHook() {
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [incrementor, setIncrementor] = useState(100);

  useCustomHook(() => setCount((c) => c + 1), delay);
  return (
    <div>
      <h1>UseMyHook</h1>
      <p>Contador : {count}</p>
      <p>Delay : {delay}</p>
      <p>Incrementer nos botoes</p>
      <button onClick={() => setDelay((d) => d + incrementor)}>
        Adicionar {incrementor}
      </button>
      <button onClick={() => setDelay((d) => d - incrementor)}>
        Diminui {incrementor}
      </button>
      <input
        type="number"
        value={incrementor}
        onChange={(e) => setIncrementor(Number(e.target.value))}
      />
    </div>
  );
}
