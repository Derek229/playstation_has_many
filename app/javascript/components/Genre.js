import React from 'react'

const genre = (props) => {
  const {games, genre} = props
  const {name, id} = genre

  const renderGames = () => {
  return games.map(game => {
return(
  <div>
    <h2>{game.name}</h2>
    <p>{game.body}</p>
    <p>{game.price}</p>
    <a href = {`/genres/${game.genre_id}/games/${game.id}`}>preview game</a>
    <a href = {`/genres/${games.genre_id}/games/${game.id}/edit`} > edit game </a>
    
  </div>
)
  })
  }
  return (
    <div>
      <a href= '/'> back to genres </a>
      
  <div>
    <h1>{name}</h1>
    < a  href={`/genres/${genre.id}/games/new`}>Add new game here</a>
       {renderGames()}
       </div>
    </div>
  )

}
export default genre