import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyFunction from "./Map";












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
        <Carousel.Item key={index} className='cara'>
          <img
            className="center-block"
            src={url}
            alt={`Slide ${index}`}
          />
          {/* <MyFunction  className="mp"/> */}
          <Carousel.Caption>
            <h3> Travelin </h3>
            <p> Take only memories, leave only footprints.</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default MyCarousel;
