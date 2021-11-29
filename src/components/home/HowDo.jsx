import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'

import ButtonMenu from './ButtonMenu'

export default function HowDo() {
  return (
    <div>
      <Container>
        <Row>
          <div className="d-flex justify-content-center"><h1>Como Funciona?</h1></div>
        </Row>
        <br />
        <Row>
          <div className="d-flex justify-content-center">
            <Card className="d-flex col-8">
            <Card.Img></Card.Img>
            <Card.Body>
              <Card.Title><h5>Passo 1</h5></Card.Title>
              <Card.Text><p>Você liga</p></Card.Text>
            </Card.Body>
          </Card>
          </div>
          <div><br /></div>
          <div className="d-flex justify-content-center">
          <Card border="ligth" className="d-flex col-8" bg="light">
            <Card.Img></Card.Img>
            <Card.Body className="d-flex flex-column align-items-center">
            <Card.Title><h5>Passo 2</h5></Card.Title>
              <Card.Text><p>A gente prepara</p></Card.Text>
            </Card.Body>
          </Card>
          </div>
          <div><br /></div>
          <div className="d-flex justify-content-center">
          <Card border className="d-flex col-8">
            <Card.Img></Card.Img>
            <Card.Body className="d-flex flex-column align-items-end" >
            <Card.Title><h5>Passo 3</h5></Card.Title>
              <Card.Text><p>E te enviamos</p></Card.Text>
            </Card.Body>
          </Card>
          </div>
        </Row>
        <br />
        <Row>
        <ButtonMenu />
        </Row>
      </Container>
    </div>
  )
}