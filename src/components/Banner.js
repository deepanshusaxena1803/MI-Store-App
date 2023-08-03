import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

const Banner = ({banner}) => {
  return (
    <div>
    <Carousel fade interval={3000}>
        {banner.map((item,index)=>(
            <Carousel.Item>
              <img src={item.image} alt={`${index} Banner`} height={550} />
              <Carousel.Caption>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                <b>{item.source}</b> <br />
                <u>Read More</u>
              </Carousel.Caption>
            </Carousel.Item>
        ))}
    </Carousel>
    </div>
  )
}

export default Banner