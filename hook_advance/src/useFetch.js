import React, { useState } from 'react';

export const useFetch = (url, option) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url, option);
      const jsonResult = await response.json();
    };
  }, [url]);
  return [1, 2];
};

export const MyHook = () => {
  const [result, loading] = useFetch(
    'https://jsonplaceholder.typicode.com/posts',
  );

  return (
    <>
      <h1>Resultado : {result}</h1>
      <p>Status de carregamento: {loading}</p>;
    </>
  );
};
