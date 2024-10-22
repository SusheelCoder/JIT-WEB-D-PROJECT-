import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
function Photo() {
  return (
    <Container>

    <Carousel >
      
        <Carousel.Item interval={1500}>
        <Image src="holder.js/171x180" rounded />
          <Carousel.Caption>
            <h3>Label for first slide</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
        <Image src="holder.js/171x180" rounded />
          <Carousel.Caption>
            <h3>Label for second slide</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </Container>
  );
}

export default Photo;