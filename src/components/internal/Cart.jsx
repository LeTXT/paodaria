import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'

import { BsCart2 } from "react-icons/bs"
import Modal from 'react-bootstrap/Modal'



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
            <Modal.Title>Carrinho de compras</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h1>Nenhum pão aqui ainda</h1>
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