<h1 align="center"> Intro Hooks Base </h1>

<h2>React route Dom</h2> 
<p>
  A gente vai utilizar para pode fazer navegação  e utilização padrão do hook 

Estrutura :  

        import './App.css';
        import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

        // pages 
        import Home from './page/Home'
        import About from './page/About'

          function App() {
            //  hooks :

            // metodos:

         return (
                 <div className='App'>
                   <h1>Introdução ao React Hooks </h1>
                   <BrowserRouter >
                     <ul>
                       <li>
                         <Link to="/">
                           Home
                         </Link>
                       </li>
                       <li>
                         <Link to="/about">
                           About
                         </Link>
                       </li>
                     </ul>
                     <Routes >
                       <Route path="/" />
                     </Routes>
                   </BrowserRouter>
                 </div>

                 );
                }

                export default App;

</p>