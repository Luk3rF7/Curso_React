import React, { useState } from 'react'

const HookUseState = () => {
  let userName = "Eu sou variavel Let"
  // 1 - useState 
  const [name, setName] = useState("useState Valor inicial !")

  // função - useState
  const changeNames = () => {

    userName = "Var dentro do changeName"

    setName("valor atualizado setName ")
  }

  //  2 - useState e input:
  const [age, setAge] = useState(18);
  // 2 função handleSubmit 
  const handleSubmit = (e) => {
    //evita que formulario seja enviado !
    e.preventDefault();

    // aqui a gente faz envios de api 
    console.log("Enviando dado para api...", age)
  }
  return (
    <div>
      {/* 1 -useState */}
      <h2>UseState </h2>
      <p>
        Variavel = {userName}
      </p>
      <p>
        UseState = {name}
      </p>
      <button onClick={changeNames}>Mude o estado clicando !</button>
      <hr />
      {/* useState e input */}
      <form onSubmit={handleSubmit}>
        <h2>UseState e Input</h2>
        <h4> Digite sua idade :</h4>
        <input
          type="text"
          value={age}
          onChange={(e) =>
            setAge(e.target.value)} />
        <input
          type="submit"
          value="enviar"
        />
      </form>
      <p>Sua Idade digitada no input é : {age}</p>
      <hr />
    </div>
  )
}

export default HookUseState