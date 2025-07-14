import React from 'react'
import {product} from '../product'
const Image = () => {
  return (
    <div>
      <p>
      <img src={product.imgURL} alt="Montre" width={"300px"} />
      </p>
    </div>
  )
}

export default Image
