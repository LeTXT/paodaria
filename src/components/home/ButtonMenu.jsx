import React from 'react'

import Button from 'react-bootstrap/Button'


export default function ButtonMenu () {
  return (
    <div>
      <div className="d-flex justify-content-center">
              <Button variant="warning" size='lg' href='menup' className="d-flex pt-3"><h3>Cardápio</h3></Button>
            </div>
            <br />
    </div>
  )
}