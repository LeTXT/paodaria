import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'

import ButtonMenu from './ButtonMenu'





export default function FavItens() {

  return (
    <div>
      <Container>
        <Row>
          <div className="d-flex justify-content-center">
            <h1>Os Preferidos da Casa</h1>
          </div>
          </Row>
          <br />
          <Row>
            <div className='d-flex flex-md-row justify-content-around'>
              <Card  border='white' className="d-flex col-sm-3 col-md-3">
                <Card.Img src="https://docs.google.com/uc?id=1aw9kaguMACocMqF5fvdIzNupSekgv5Ol"></Card.Img>
                <Card.Body>
                  <Card.Title>
                    <div className="d-flex justify-content-center"><p >Pão Francês</p></div>
                  </Card.Title>
                </Card.Body>
              </Card>
              <Card  border='white' className="d-flex col-sm-3 col-md-3">
                <Card.Img src="https://docs.google.com/uc?id=1dg7JXe3ajgZCtubS_6CjMMyyAgZsfTdu"></Card.Img>
                <Card.Body>
                  <Card.Title>
                    <div className="d-flex justify-content-center"><p>Baguete</p></div>
                  </Card.Title>
                </Card.Body>
              </Card>
              <Card  border='white' className="d-flex col-sm-3 col-md-3">
                <Card.Img src="https://docs.google.com/uc?id=1KCqoRoGj2gGn7xiZ6Bcb9JjfCd1PavyH"></Card.Img>
                <Card.Body>
                  <Card.Title>
                    <div className="d-flex justify-content-center"><p>Croissant</p></div>
                  </Card.Title>
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
