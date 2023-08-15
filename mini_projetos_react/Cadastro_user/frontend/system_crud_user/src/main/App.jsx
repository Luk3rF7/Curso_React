import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Logo from '../components/templates/logo/Logo';
import Navbar from '../components/templates/navbar/Navbar'
import Router from '../main/Router'
import Footer from '../components/templates/footer/Footer';
import { BrowserRouter } from 'react-router-dom';
export default props =>
<BrowserRouter>
  <div className="app">
    <Logo />
    <Navbar />
    <Router />
    <Footer />
  </div>
</BrowserRouter>