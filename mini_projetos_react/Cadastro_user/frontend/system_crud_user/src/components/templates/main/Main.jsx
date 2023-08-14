import React from 'react';
import './Main.css';
import Header from '../header/Header'
export default props =>

  <React.Fragment>
   <Header 
      /* receber propriedade */
      {...props}
   />
    <main className="content" >
          Conteudo
      </main>

  </React.Fragment>