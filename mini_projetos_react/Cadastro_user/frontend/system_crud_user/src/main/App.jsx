import React from 'react';
import './App.css';
import Logo from '../components/templates/logo/Logo'
import Navbar from '../components/templates/navbar/Navbar'
import Main from '../components/templates/main/Main'
import Footer from '../components/templates/footer/Footer'

export default props =>
  <div className="app">
    <Logo />
    <Navbar />
    <Main />
    <Footer />
  </div>