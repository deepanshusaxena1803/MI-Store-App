import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/HotItemCard.css"

const HotItemCard = ({image,price,name,index}) => {
  return (
    <div class="HotItemCard">
        <img src={image} alt={`${index} product`}></img>
        <p>{name}</p>
        <span>{price}</span>
    </div>
  )
}

export default HotItemCard