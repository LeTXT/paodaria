import React, { useState, useEffect } from 'react';

import Card from 'react-bootstrap/Card';


export default function CardP(props) {
  const [state, setState] = useState('');
  const [valueI, setValueI] = useState(0);

  const but = (e) => valueI === 0 ? e = 'disabled' : e = ''

  const handleButtonSum = () => setValueI(valueI + 1)

  const handleButtonSub = () => valueI === 0 ? 0 : setValueI(valueI - 1)

  const amount = Number(valueI) 
  console.log(amount)

  return (
    <Card className="col-5 col-md-2 m-2">
      <Card.Img src={props.img}></Card.Img>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <div className="d-flex justify-content-end">
          <h3>R$ {props.price}</h3>
        </div>
        <div className="d-flex justify-content-between">
          {/* <ButtonAdd onClick={props.button}/> */}
          <button
            onClick={props.button}
            className={`btn btn-warning btn-md ${but()}`}
          >
            Adicionar
          </button>
          <div className="d-flex">
            <button onClick={handleButtonSum} className="btn shadow-none">
              +
            </button>
            <div className="form-control ">{valueI}</div>
            <button onClick={handleButtonSub} className="btn shadow-none">
              -
            </button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
