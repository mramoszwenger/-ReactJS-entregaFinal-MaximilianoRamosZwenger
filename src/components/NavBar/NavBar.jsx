import React from "react";
import { Link, NavLink } from "react-router-dom";
import './NavBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return(
      <>
        <Navbar expand="lg" bg="light" id="principal-nav">
          <Container>
            
            <NavLink to={'/'}><Navbar.Brand className="animate__animated animate__bouncein">
              <img src="/src/assets/img/logotipoEmpresa.png" alt="logo-empresa" className="company__logo"/>
            </Navbar.Brand></NavLink>
            <Navbar.Toggle aria-controls="mainNav" />
            <Navbar.Collapse id="mainNav">
              <Nav className="ms-auto">
                <Nav.Item>
                  <NavLink to={'/'}>Inicio</NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink to={'/nosotros'}>Nosotros</NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavDropdown title="Servicios" id="navbarDropdown" align="end">
                    <NavDropdown.Item><NavLink to={'categoria/administracion sistemas'}>Administración de Sistemas</NavLink></NavDropdown.Item>
                    <NavDropdown.Item><NavLink to={'categoria/infraestructura redes'}>Redes de Datos y Telecomunicaciones</NavLink></NavDropdown.Item>
                    <NavDropdown.Item><NavLink to={'categoria/cloud computing'}>Soluciones en la Nube</NavLink></NavDropdown.Item>
                  </NavDropdown>
                </Nav.Item>
                <Nav.Item>
                  <NavLink to={'/contacto'}>Contacto</NavLink>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>

            <CartWidget/>

          </Container>
        </Navbar>

      </>
    )
}

export default NavBar;