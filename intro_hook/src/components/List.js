import { useState, useEffect } from 'react'

const List = ({ getItems }) => {
  const [myItems, setMyItems] = useState([]);
  // quando não temos muito oque inicia a gente pode 
  // utilizar useEffect 
  // onde carrega dados do banco ,e manda pro array vazio
  // ai ele vem pra esse componente ai ele ve que get item mudou
  //ai useEffect executa ! 
  useEffect(() => {
    console.log("Buscando item do DB..");
    setMyItems(getItems);
  }, [getItems]);
  return (
    <div>
      <h2> List useCallback </h2>
      {myItems &&
        myItems.map((item) => (
          <p key={item}>{item}</p>
        ))}
    </div>
  )
}
export default List