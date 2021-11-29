import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

import { BsPersonCircle } from "react-icons/bs"




export default function Login() {
  const [state, setState] = useState(false)

  const handleShow = () => setState(true)
  const handleClose = () => setState(false)

  return (
    <div>
        <Button onClick={handleShow} variant="light"><BsPersonCircle size='30'/></Button>

        <Modal show={state} onHide={handleClose}>
          <Modal.Header closeButton={state}>
            <Modal.Title>Faça seu Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form >
              <Form.Group className="mb-3" controlId="FormBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' placeholder='Seu email'/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="FormBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type='password' placeholder='Sua senha'/>
              </Form.Group>
              <div>
              <Button variant="warning" type="submit" className="mx-3 ">Entrar</Button>

              <Button variant='light' href='#'>Criar Usuário</Button>
              </div>
              
            </Form>
          </Modal.Body>
        </Modal>
    </div>
  )
}