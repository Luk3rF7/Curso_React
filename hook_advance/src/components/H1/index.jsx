import { useContext } from 'react';
import { GlobalContext } from '../context/AppContext';

export const H1 = () => {
  // eu posso utilizar hook useContext para pega value do context
  // e pega value
  const theContext = useContext(GlobalContext);
  // destructuring avançado!
  const {
    contextState: { title, counter },
  } = theContext;
  return (
    <h1>
      {title} {counter}
    </h1>
  );
};
