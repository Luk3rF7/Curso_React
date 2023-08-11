import { React, createContext } from 'react';


export const SomeContext = createContext();
export const HookUseContext = ({ children }) => {
  const contextValue = "testing context"


  return (
    //a gente utiliza assim para prover nos outros elementos
    <SomeContext.Provider value={{ contextValue }}>
      {children}
    </SomeContext.Provider>
  )
}
export default HookUseContext
