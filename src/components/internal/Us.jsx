import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export default function Us() {
  return (
    <div>
      
      <Container>
        <Row>
          <div>
            <img src="https://docs.google.com/uc?id=16FnkzcMstM1eJ9H4ISLdN8NKjtUIr9k5" alt="" className="d-block w-100 "></img>
            <br />
          </div>
        </Row>
        <Row>
          <div className="d-flex flex-column align-items-center" >
            <h1>História</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </Row>
        <br />
        <Row>
          
          <div className="d-flex flex-column align-items-center">
            <h1>Valores</h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
          </div>
        </Row>
      </Container>
    </div>
  )
}