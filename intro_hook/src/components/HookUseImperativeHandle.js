import { useRef } from 'react'
import SomeComponent from './SomeComponent';
const HookUseImperativeHandle = () => {
  const inputRef = useRef();
  return (
    <div>
      <h1>  HookUseImperativeHandle </h1>
      <SomeComponent ref={inputRef} />
      <button onClick={() => inputRef.current.validate()}>Validate</button>
    </div>
  )
}

export default HookUseImperativeHandle