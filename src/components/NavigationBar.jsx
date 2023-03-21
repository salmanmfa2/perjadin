import React from 'react';
import {Navbar, Container, Nav,} from 'react-bootstrap'


const NavigationBar = () => {
  return (
    <div className="Navigation">
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">E-Perjadin
      <img src="https://placekitten.com/40/40" alt="" />
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