import React from 'react'
import "../styles/ProductReviewsCard.css"

const ProductReviewsCard = ({image,index,name,review,price}) => {
  return (
    <div className="ProductReviewsCard">
        <img src={image} alt={index} />
        <h4>{review}</h4>
        <p>{name}</p>
        <span>{price}</span>
    </div>
  )
}

export default ProductReviewsCard