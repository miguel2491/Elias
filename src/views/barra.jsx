import React, { useEffect, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../styles/Barra.css';
import logo1 from '../images/Logos/LogoFN.png';
import logo2 from '../images/Logos/letrasCATSA.png';

const CustomNavbar = () => {
  const [navBackground, setNavBackground] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={navBackground ? 'navbar-solid' : 'navbar-transparent'}
    >
      <Navbar.Brand href="#" className="d-flex align-items-center">
        <img src={logo1} alt="Logo 1" className="navbar-logo logo1 rotating-logo" />
        <img src={logo2} alt="Logo 2" className="navbar-logo logo2 ml-2" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#inicio" className='nav-link-white'>INICIO</Nav.Link>
          <Nav.Link href="#sobre-nosotros" className='nav-link-white'>NOSOTROS</Nav.Link>
          <Nav.Link href="#productos" className='nav-link-white'>PRODUCTOS Y SERVICIOS</Nav.Link>
          <Nav.Link href="#contacto" className='nav-link-white'>CONTACTANOS</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
