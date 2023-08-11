import { useEffect, useState, useLayoutEffect } from 'react'

const HookuseLayoutEffect = () => {
  const [name, setName] = useState("Algum nome")

  useEffect(() => {
    console.log("2")
    setName("Mudou de nome")
  }, []);

  useLayoutEffect(() => {
    console.log("1")
    setName("Outro nome")
  }, []);

  console.log(name)
  return (
    <div>
      <h1> HookuseLayoutEffect</h1>
      <p>Nome atual é : {name}</p>
      <hr />
    </div>
  )
}

export default HookuseLayoutEffect