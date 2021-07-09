import React from 'react'

function Product({handleInputNamingFunc}) {
  return (
    <div>
      {handleInputNamingFunc('title')}
      {handleInputNamingFunc('handle')}
      {handleInputNamingFunc('image')}
    </div>
  )
}

export default Product
