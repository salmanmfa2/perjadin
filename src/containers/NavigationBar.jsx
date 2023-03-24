import React from 'react';
import {Navbar, Container, Nav,} from 'react-bootstrap'
import Logo from '../Assets/Logo-pesawat.png'
import Login from '../pages/Login';

const logoPesawat = require('../Assets/Logo-pesawat.png').default;


const NavigationBar = () => {
  return (
    <div className="Navigation" style={{boxShadow:'0 0 0 5px rgba(0, 0, 0, 0,2'}}>
    <Navbar bg="light" >
      <Navbar.Brand href="/">E-Perjadin
      <img src={Logo} alt="Logo Pesawat" style={{width:'36px', height:'24px', gap:"90px"}}/>
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="/">Dashboard</Nav.Link>
        <Nav.Link href="/register">Register Perjadin</Nav.Link>
        <Nav.Link href="/">Referensi Akun</Nav.Link>
        <Nav.Link href="/">Login</Nav.Link>
        
      </Nav>
    </Navbar>
    </div>
    

    
    
  )
}

export default NavigationBar;