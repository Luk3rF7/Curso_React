<h1 align="center"> Organização React useContext </h1>

<h2> Organização de Pasta context :</h2>
<div>
  <img src="./img/postContext.jpg">

  <p>
  Na pasta context fica os useContext que são utilizado globalmente onde utilizamos nome do hook mais Provide ! </p>
<div>
    <ul>
    <li> actions são responsavel por fazer uma ação,exemplo carregar os post;
    <li> types são os tipos das actions e onde defino para não erra um letra,numero ou chamar ela incorrenta;
    <li> data fica responsavel pela dados de entrada e saida;
    <li> context ficara create context;
    <li> reducer são responsavel pela actions e types;
    <li> PostProvider ou index sera onde ficara nosso componente;
  </div>
</div>
<div>
     <h2> Action</h2>
           <p>
           Com minha types definida a gente consegui
           import e utilizar dispatch que vem do reducer :
           </p>
          <h3>Exemplo:</h3>
          <img src="./img/actons.1.png">
      <h2> Types </h2>
         <p>
          A gente utiliza dessa maneira para
          exemplificar oque action vai realizar
          seja loading ou msg de success !
          </p>
         <h3>Exemplo:</h3>
        <img src="./img/TYPES.1.png">
      <h2> Data </h2>
          <p>
          data e onde fica responsavel por
          receber os dados e passar entradas
          das actions
          </p>
          <h3>Exemplo:</h3>
         <img src="./img/data.1.png">
     <h2> Reducer </h2>
          <p>
           reducer
          </p>
           <h3>Exemplo:</h3>
           <img src="./img/actons.1.png">
     <h2> Context </h2>
          <p>createContext  bem simples:</p>
          <h3>Exemplo:</h3>
          <img src="./img/createContext.1.png">
     <h2> PostsProvider nosso jsx </h2>
          <p>
           Com nosso context criado e so import e criar nosso componente global PostsProvide para elemento da pagina;
          </p>
           <h3>Exemplo:</h3>
           <img src="./img/postsprovider.1.png">
           <h3>
           <em>Lembrando sempre de tipar com propsTypes: </em></h3>
           <p>Caso tenha mais de um elemento utilizamos node em vez de elment</p>
           <img src="./img/proptipagem.1.png">
           <h3>com isso basta adicionar nosso reducer junto com data para pode finalizar componente global !</h3>
           <img src="./img/postsprovide.2.png">
           <h3>
            Logo apos e só colocar nosso componente context e encapsular na onde queremos !
           </h3>
           <img src="./img/postsprovide.3.png">
</div>
