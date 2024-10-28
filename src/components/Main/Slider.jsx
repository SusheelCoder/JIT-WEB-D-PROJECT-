import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import img2 from '../../assets/img2.jpg';
import img1 from '../../assets/img1.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';


export default function Slider() {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
              src={img1}
            alt="Image One"
          />
          {/* <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
                      src={img2}
            alt="Image Two"
          />
          {/* <Carousel.Caption>
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
                      src={img3}
            alt="Image three"
          />
          {/* <Carousel.Caption>
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
                      src={img4}
            alt="Image four"
          />
          {/* <Carousel.Caption>
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
}