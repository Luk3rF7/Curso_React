import { React, useRef, useState, useEffect } from 'react'

const HookUserRef = () => {
  // 1 - useRef
  //vou criar variavel de referencia valores
  const numberRef = useRef(0);
  const [counter, setCounter] = useState(0);
  const [counterB, setCounterB] = useState(0);

  useEffect(() => {
    numberRef.current = numberRef.current + 1
  });
  // 2 - useRef Com DOM
  const inputRef = useRef()
  const [text, setText] = useState("useRef Com Dom")

  const handleSubmit = (e) => {
    e.preventDefault();
    setText("")

    inputRef.current.focus()
  }

  return (
    <div>
      <h2>
        HookUserRef
      </h2>
      <p>
        O componente renderizou : {numberRef.current} vezes
      </p>
      <p>
        counter A {counter}
      </p>
      <button onClick={() => setCounter(counter + 1)}>Contador A</button>
      <p>
        counter B {counterB}
      </p>
      <button onClick={() => setCounterB(counterB + 1)}>Contador B</button>
      <hr />
      {/* useRef com DOM */}
      <form onSubmit={handleSubmit}>
        <label>UseRef com Dom:</label><br></br>
        <input type="text" ref={inputRef} value={text} onChange={(e) => { setText(e.target.value) }} />
        <input type="submit" value="Enviar" />
      </form>
      <hr />
    </div>
  )
}

export default HookUserRef;