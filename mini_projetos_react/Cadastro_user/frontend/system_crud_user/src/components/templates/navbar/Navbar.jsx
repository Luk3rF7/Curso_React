import './Navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default props => 
  <aside className="menu-area">
    {/* Refatora igual no header */}
    <nav className="menu">
      <Link to="/">
        <i className="fa fa-home"></i>Início
      </Link>
      <Link to="/users">
        <i className="fa fa-users"></i>Clientes
      </Link>
    </nav>
  </aside>