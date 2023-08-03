import React from 'react'
import {Link} from "react-router-dom"

function Offer({link,src,index}) {
  return (
    <Link to={link}><img src={src} alt={`${index} Offer`}></img></Link>
  )
}

export default Offer