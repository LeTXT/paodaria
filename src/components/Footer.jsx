import React from "react"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export default function Footer() {
  return (
    <div>
      <Container>
        <Row>
          <div className="d-flex justify-content-center">
            <p>Redes sociais</p>
          </div>
        </Row>
        <Row>
          <div className="d-flex justify-content-center"> 
            <p>2021 © Pão</p>
          </div>
        </Row>
      </Container>
    </div>
  )
}