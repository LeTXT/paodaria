import React from 'react';
import Button from 'react-bootstrap/Button'

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import Cart from './internal/Cart'
import Login from './internal/Login'

import { GiSlicedBread } from "react-icons/gi"

export default function NavBar() {
  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand href="/">
            <GiSlicedBread size='30'/>
            </Navbar.Brand>
          <Nav className="justify-content-end align-items-stretch">
            <Nav.Link href='us'>
              <Button variant='light' className="d-flex pt-2 align-items-center"><h6>Nós</h6></Button>
              </Nav.Link>
            <Nav.Link>
            <Cart />
            </Nav.Link>
            <Nav.Link>
           <Login />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
