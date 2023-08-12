import { React, useContext } from 'react'
import { SomeContext } from './../components/HookUseContext';
import HookUseState from '../components/HookUseState'
import HookUseReducer from '../components/HookUseReducer'
import HookUseEffect from '../components/HookUseEffect'
import HookUserRef from '../components/HookUserRef';
import HookUseCallback from '../components/HookUseCallback';
import HookUseMemo from '../components/HookUseMemo';
import HookuseLayoutEffect from '../components/HookuseLayoutEffect';
import HookUseImperativeHandle from '../components/HookUseImperativeHandle';

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
      <HookUserRef />
      <HookUseCallback />
      <HookUseMemo />
      <HookuseLayoutEffect />
      <HookUseImperativeHandle />
    </div>
  )
}

export default Home