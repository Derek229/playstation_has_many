import React from 'react'


const Game = (props) => {
  const{ name, body, price, genre_id} = props.game
  
  return (
  <div>
    <h1>{name}</h1>
    <h3>{body} </h3>
    <p>{price}</p>
    <a href={`/genres/${genre_id}`}>back to games</a>  
  </div>
  )
}

export default Game