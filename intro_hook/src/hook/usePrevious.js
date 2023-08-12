import { useDebugValue, useEffect, useRef } from 'react';

export const usePrevious = (value) => {
  const ref = useRef;
  useDebugValue("-------use debug hook --------------")
  useDebugValue("O numero anterior é :" + value)
  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
}