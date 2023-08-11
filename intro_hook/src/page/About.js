import { React, useContext } from 'react'
import { SomeContext } from './../components/HookUseContext';

const About = () => {
  const { contextValue } = useContext(SomeContext);

  return (
    <>
      <div>About</div>
      <p>valor do contexto: {contextValue}</p>
    </>
  )
}

export default About