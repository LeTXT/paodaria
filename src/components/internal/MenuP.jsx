import React, { useState } from 'react'
import Container from 'react-bootstrap/esm/Container'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import CardP from './forMenuP/CardP'
import { itensP } from './forMenuP/ItensP'

import uniqid from 'uniqid'


export default function MenuP() {

  const [cart, setCart] = useState([])

    const handleAddCart = (id, title, price) => {

    console.log(id, title, price)
    setCart([...cart, {id, title, price}])
    console.log(cart)

  }

  return (
    <div>
      <Container>
        <Row>
          <div className="d-flex justify-content-center"><h1>Catálogo</h1><br /></div>
        </Row>
        <Row>
        <div className="d-flex flex-wrap flex-md-row justify-content-around justify-content-lg-start ">
      
          {itensP.map((card) => (
            <CardP key={card.id} img={card.img} title={card.title} text={card.text} price={card.price} button={() => handleAddCart(card.id, card.title, card.price)}/>
          ))}
        </div>
        </Row>
      </Container>
      
    </div>
  )
}