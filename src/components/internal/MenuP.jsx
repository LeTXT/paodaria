import React, { useState } from 'react'
import Container from 'react-bootstrap/esm/Container'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import CardP from './forMenuP/CardP'

import { itensP } from './forMenuP/ItensP'

import { inCart } from './forCart/ProductsInTheCart'


export default function MenuP() {

  let numP = 0

  const valueP = (state) => {
    return numP = state
  } 


  const [value, setValue] = useState(0)
  const [cart, setCart] = useState([])

    const handleAddCart = (id, img, title, price) => {
      
        if (inCart.lenght < 2) {
          console.log(id, title, price)
        setCart(() => [... cart, { id, img, title, price, numP }])

        inCart = [... cart, { id, img, title, price, numP }]
        }
        const result = cart.filter((item) => item.id === id)
        if (result) {
          let numPSum = numP + cart[cart.lenght - 2].numP
          
          setCart(() => [... cart, { id, img, title, price, numP: numPSum }])
          
          inCart = [... cart, { id, img, title, price, numP: numPSum }]
        }
        
  }

  return (
    <div>
      <Container>
        <Row>
          <div className="d-flex justify-content-center"><h1>Cardápio</h1><br /></div>
        </Row>
        <Row>
        <div className="d-flex flex-wrap flex-md-row justify-content-around justify-content-lg-start ">
      
          {itensP.map((card) => (
            <CardP key={card.id} img={card.img} title={card.title} text={card.text} price={card.price} button={() => handleAddCart(card.id, card.img, card.title, card.price)} value={valueP}/>
          ))}
        </div>
        </Row>
      </Container>
      
    </div>
  )
}