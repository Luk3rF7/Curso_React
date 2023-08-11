import { useState, useEffect, useMemo } from 'react'

const HookUseMemo = () => {
  const [number, setNumber] = useState(0);

  const premiumNumber = useMemo(() => {
    return ["0", "100", "200"]
  }, []);


  //  faz alguma coisa qndo premiunNumber for
  // alterado
  useEffect(() => {
    console.log('Premium numbers foi alterado!')
  }, [premiumNumber]);
  return (
    <div>
      <h1>
        HookUseMemo
      </h1>
      {/* criando alguma coisa !*/}
      <input type="text" onChange={(e) => setNumber(e.target.value)} />
      {premiumNumber.includes(number) ? <p>Acertou o Número</p> : ""}
    </div>
  )
}

export default HookUseMemo