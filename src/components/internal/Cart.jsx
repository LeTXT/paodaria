import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'

import { BsCart2 } from "react-icons/bs"
import Modal from 'react-bootstrap/Modal'
import { inCart } from './forCart/ProductsInTheCart'
import CartCard from './forCart/CartCard'
import { itensP } from './forMenuP/ItensP'




export default function Cart() {
  const [state, setState] = useState(false);

  const handleClose = () => setState(false)
  const handleShow = () => setState(true)
  return (
    <div>
      <Button onClick={handleShow} variant='light' >
        <BsCart2 size='30'/>
      </Button>

      <Modal show={state} onHide={handleClose} size="lg" centered>
          <Modal.Header closeButton={state}>
            <Modal.Title><h2>Carrinho de compras</h2></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {inCart.map((card, id) => (
               <CartCard key={id} img={card.img} title={card.title} price={card.price} value={card.amount} button={() => handleAddCart(card.id, card.title, card.price)}/>
            ))}
          </Modal.Body>
        </Modal>

      
      {/* <Offcanvas show={state} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Nenhum pão aqui ainda
        </Offcanvas.Body>
      </Offcanvas> */}
    </div>
  )
}