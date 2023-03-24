import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import BadgeTanggal from '../components/BadgeTanggal';

function Footer() {
  return (
    <Navbar fixed="bottom" sticky="bottom" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#">Perjadin</Navbar.Brand>
        <Navbar.Text className="ml-auto">
          © {new Date().getFullYear()} My Website
        </Navbar.Text>
        <BadgeTanggal/>
      </Container>
    </Navbar>
  );
}

export default Footer;