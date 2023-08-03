import React from 'react'
import {Link} from "react-router-dom"
import "../styles/starproduct.css"

const StarProduct = ({StarProduct}) => {
  return (
    <div class="starproduct">
        <div>
            <Link to={StarProduct[0].url}><img src={StarProduct[0].image} /></Link>
        </div>
        <div>
            <Link to={StarProduct[1].url}><img src={StarProduct[1].image} /></Link>
            <Link to={StarProduct[2].url}><img src={StarProduct[2].image} /></Link>
            <Link to={StarProduct[3].url}><img src={StarProduct[3].image} /></Link>
        </div>
    </div>
  )
}

export default StarProduct