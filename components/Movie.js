import React from 'react'

const Movie = ({ image, title, description, plot, contentRating, imDbRating }) => {
  return (
      
      <div>
        <img src={image} alt={title} />
        <h3>{title} {description}</h3>
        {plot}
        <p>{imDbRating}</p>
        <p>{contentRating}</p>
       </div>
  )
}

export default Movie