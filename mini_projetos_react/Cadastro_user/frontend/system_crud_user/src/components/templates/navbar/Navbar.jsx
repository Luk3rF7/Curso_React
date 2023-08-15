import './Navbar.css';
import React from 'react';


export default props => 
  <aside className="menu-area">
    {/* Refatora igual no header */}
    <nav className="menu">
      <a href="#/">
        <i className="fa fa-home"></i>Início
      </a>
      <a href="#/users">
        <i className="fa fa-users"></i>Usários
      </a>
    </nav>
  </aside>