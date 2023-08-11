
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
// pages 
import Home from './page/Home'
import About from './page/About'
// hooks
import HookUseContext from './components/HookUseContext';

function App() {
  return (
    <div className='App'>
      {/* emcapsular meu contexto */}
      <HookUseContext >
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
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </HookUseContext>
    </div>
  );
}

export default App;
