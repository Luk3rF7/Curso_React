import logo from '../../../assets/logo/logo.png'
import React from 'react';
import './Logo.css';
import { Link} from 'react-router-dom'

export default props => 
<aside>
    <Link to="/" className="logo">
        <img src={logo} alt="logoLc" />
    </Link>
</aside>