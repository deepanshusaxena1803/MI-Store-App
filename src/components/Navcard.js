import React from 'react'
import "../styles/Navcard.css"

const Navcard = ({image,name,price,index}) => {
  return (
    <div className="Navcard">
        <img src={image} alt={`${index} image`} />
        <p>{name}</p>
        <span>{price}</span>
    </div>
  )
}

export default Navcard