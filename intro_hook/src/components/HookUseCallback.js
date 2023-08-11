import { useCallback, useState } from 'react'
import List from './List';

function HookUseCallback() {
  const [counter, setCounter] = useState(0);
  //simulando recebimento de dados :
  const getItemsFromDatabase = useCallback(() => {
    return ["a", "b", "c"]
  }, []);

  return (
    <div>
      <h1>
        HookUseCallback
      </h1>
      {/* vamos passa lsita de item no componente */}
      <List getItems={getItemsFromDatabase} />
      <button onClick={() => setCounter(counter + 1)}>Alterar</button>
      <p>
        Contador : {counter}
      </p>
      <hr></hr>
    </div>
  )
}

export default HookUseCallback