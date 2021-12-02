import React, { useState } from 'react';

import Card from 'react-bootstrap/Card';


export default function CartCard(props) {

  const [valueI, setValueI] = useState(0);

  const handleButtonSum = () => setValueI(valueI + 1)

  const handleButtonSub = () => valueI === 0 ? 0 : setValueI(valueI - 1)

  

  return (
    <Card className="col-5 col-md-2 m-2">
      <div className='d-flex'><Card.Img src={props.img}></Card.Img>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <div className="d-flex justify-content-start">
          <h3>R$ {props.price}</h3>
        </div>
        <div className="d-flex justify-content-between">
          
          <button
            onClick={props.button}
            className={`btn btn-warning btn-md`}
          >
            Adicionar
          </button>
          <div className="d-flex">
            <button onClick={handleButtonSum} className="btn shadow-none">
              +
            </button>
            <div className="form-control ">{props.value}</div>
            <button onClick={handleButtonSub} className="btn shadow-none">
              -
            </button>
          </div>
        </div>
      </Card.Body></div>
    </Card>
  );
}
