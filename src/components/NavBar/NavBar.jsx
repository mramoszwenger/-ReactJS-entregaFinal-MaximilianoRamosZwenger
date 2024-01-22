import React from "react";
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
            <Navbar.Brand href="#" className="animate__animated animate__bouncein">
              <img src="/logotipoEmpresa.png" alt="logo-empresa" className="company__logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="mainNav" />
            <Navbar.Collapse id="mainNav">
              <Nav className="ms-auto">
                <Nav.Item>
                  <Nav.Link href="#">Inicio</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#nosotros">Nosotros</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <NavDropdown title="Servicios" id="navbarDropdown" align="end">
                    <NavDropdown.Item href="#servicios">Administración de Sistemas</NavDropdown.Item>
                    <NavDropdown.Item href="#servicios">Redes de Datos y Telecomunicaciones</NavDropdown.Item>
                    <NavDropdown.Item href="#servicios">Soluciones en la Nube</NavDropdown.Item>
                  </NavDropdown>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="contacto.html">Contacto</Nav.Link>
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