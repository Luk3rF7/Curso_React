import { useEffect, useState } from 'react'

const HookUseEffect = () => {
  const [number, setNumber] = useState(1);

  // 1 useEffect sem dependência:
  useEffect(() => {
    console.log('Estou sem executado...')
  })

  // 2 useEffect com dependência: 
  useEffect(() => {
    console.log("com array de dependência serei executado uma vez...")
  }, []);

  // função :
  const changeSomething = () => {
    setNumber(number + 1)
  }
  // 3 - item no array dep
  const [anotherNumber, setAnotherNumber] = useState(0);

  useEffect(() => {
    if (anotherNumber > 0) {
      console.log('serei executado depois que anotherNumber for alterado!')
    }
  }, [anotherNumber]);

  // 4 - useEffect 
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Hello world !")
    }, 2000)
    // a gente tenta para processo para pode 
    //limpa e evitar de vazar para outros components,paginação
    return () => clearTimeout(timer);
  }, [anotherNumber])

  return (
    <div>
      <h1> HookUseEffect</h1>
      <p>Número sera exibido: {number}</p>
      <button onClick={changeSomething}>  click e Aumenta + 1</button>
      <h4>Another Number </h4>
      <p>valor atual another number: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>another number!</button>
      <hr />
    </div>
  )
}

export default HookUseEffect