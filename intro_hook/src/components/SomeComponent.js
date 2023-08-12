import { forwardRef, useRef, useImperativeHandle } from 'react'

// a gente envolve em um forwardRef
const SomeComponent = forwardRef((prop, ref) => {
  const localInputRef = useRef()

  useImperativeHandle(ref, () => {
    return {

      validate: () => {
        if (localInputRef.current.value.length > 3) {
          localInputRef.current.value = ""
        }
      }
    }
  })
  return (
    <div>
      <h1>SomeComponent</h1>
      <p>Insira no máximo 3 caracteres</p>
      <input type="text" ref={localInputRef} />
    </div>
  )
})

export default SomeComponent