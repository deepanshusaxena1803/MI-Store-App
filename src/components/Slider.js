import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

const Slider = ({ start }) => {
  return (
    <Carousel fade>
      {start.map((item) => (
        <Carousel.Item interval={3000}>
          <img width={1500} height={550} src={item} alt="Third Slide" />
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default Slider