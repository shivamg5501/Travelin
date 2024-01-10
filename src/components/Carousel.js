import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const imageUrls = [
  'https://loremflickr.com/640/480/city',
  'https://loremflickr.com/640/480/city',
  'https://loremflickr.com/640/480/city'
  // Add more image URLs as needed
];

function MyCarousel() {
  return (
    <Carousel>
      {imageUrls.map((url, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={url}
            alt={`Slide ${index}`}
          />
          <Carousel.Caption>
            <h3>Slide label {index}</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default MyCarousel;
