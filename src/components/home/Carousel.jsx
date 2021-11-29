import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function Carousel() {
  return (
    <>
      <div className="container-sm">
        <Carousel indicators={false}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://docs.google.com/uc?id=1XPhk9n9-O22Crv0SmKvHTK6qXcVz5dEv"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://docs.google.com/uc?id=1WKPR_-TeRgN28HpkgU84ripnXuZz0ApA"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://docs.google.com/uc?id=1rdaDMY82iZwBnWdBwI43OXdN5cf1dT8D"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}
