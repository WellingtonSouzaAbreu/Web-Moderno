import React from 'react'
import { BrowserRouter } from 'react-router-dom' /* Necessita para funcionar o Router.jsx */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'

import Logo from '../components/template/Logo.jsx'
import Nav from '../components/template/Nav.jsx'
// import Home from '../components/home/home.jsx' Desnecessário assim que o router é implantado
import Routes from './Routes.jsx'
import Footer from '../components/template/Footer.jsx'

export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>
