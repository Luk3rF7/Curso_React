import React, { useState } from 'react'

const HookUseState = () => {
  let userName = "Eu sou variavel Let"
  // 1 - useState 
  const [name, setName] = useState("useState Valor inicial !")

  // função
  const changeNames = () => {

    userName = "Var dentro do changeName"

    setName("valor atualizado setName ")
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
    </div>
  )
}

export default HookUseState