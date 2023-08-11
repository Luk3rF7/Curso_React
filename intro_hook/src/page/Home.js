import HookUseState from '../components/HookUseState'
import HookUseReducer from '../components/HookUseReducer'

import HookUseEffect from '../components/HookUseEffect'

import { React, useContext } from 'react'

import { SomeContext } from './../components/HookUseContext';
const Home = () => {
  const { contextValue } = useContext(SomeContext)

  return (
    <div>
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect />
      {/* 1- usecontext */}
      <h2>useContext</h2>
      <p>valor do contexto : {contextValue}</p>
      <hr />
    </div>
  )
}

export default Home