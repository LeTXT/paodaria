import React, { useState, useEffect } from 'react'

import Card from 'react-bootstrap/Card'
import ButtonAdd from './ButtonAdd'

export default function CardP(props) {

  const [state, setState] = useState('')
  const [valueI, setValueI] = useState(0)


  useEffect(() => {
    const bot = document.querySelector('button#bot')
    valueI === 0 ? bot.classList.add('disabled') : bot.classList.remove('disabled')
  }, [valueI])
  

  const handleButtonSum = () => {
    setValueI(valueI + 1)
    console.log(valueI)
  }
  const handleButtonSub = () => {

    valueI === 0 ? 0 : setValueI(valueI - 1)
    console.log(valueI)
  }

 

  return (
      <Card className="col-5 col-md-2 m-2" >
            <Card.Img src={props.img}></Card.Img>
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text>{props.text}</Card.Text>
              <div className="d-flex justify-content-end"><h3>R$ {props.price}</h3></div>
              <div className="d-flex justify-content-between">
              {/* <ButtonAdd onClick={props.button}/> */}
              <button onClick={props.button} className="btn btn-warning btn-md" id='bot' onChange={useEffect}>Adicionar</button>
              <div className='d-flex'>
                <button onClick={handleButtonSum} className='btn'>+</button>
                <div className='form-control'>{valueI}</div>
                <button onClick={handleButtonSub} className='btn'>-</button>
              </div>
              </div>
            </Card.Body>
        </Card>
  )
}