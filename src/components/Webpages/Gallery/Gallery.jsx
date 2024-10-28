/* The provided code is a React component named `Gallery` that displays a gallery of images. Here is a
breakdown of what the code is doing: */

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import React, { useState } from 'react';
import './Gallery.css';
import image1 from './image1.jpg'
import image2 from './image2.jpg'
import image3 from './image3.jpg'
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
function Gallery() {
 /* The code snippet you provided is a React functional component named `Gallery`. Here is a breakdown
 of what the code is doing: */
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    image1,
    image2,
    image3
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
    <Header/>
    { /* The provided code snippet is rendering a gallery of images in a React component named `Gallery`.
    Here is a breakdown of what the code is doing: */}

    <div className="aboutDiv"><h1>Gallery</h1></div>
    <Container style={{marginBottom:'1rem', padding:'1rem'}}>
    

        <div className="gallery">
      {images.map((image, index) => (
        <div className="imgDiv" key={index}>
        <img
          
          src={image}
          alt={`Thumbnail ${index + 1}`}
          onClick={() => openModal(image)}
          className="thumbnail"
        />
        </div>
      ))}

      { /* This part of the code is a conditional rendering in React. */ }
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <img src={selectedImage} alt="Large view" className="large-image" />
        </div>
      )}
    </div>
  
    </Container>
    <Footer/>
   
    </>
  );
}

export default Gallery;
