import React from 'react'

const GameEdit = (props) => {
  const {genre, topic} = props
return (
<div>
    <h1>Edit game </h1>
  <form action={`/genres/${genre.id}/games/${game.id}`} method='put' >
    < input type="hidden" name="_method" value="patch"/>
   <p>name</p>
    <input defaultValue={game.name} name='game[name]'/>
    <p>description</p>
    <input defaultValue={game.body} name='game[body]'/>
    <p>price</p>
    <input defaultValue={game.price} name='game[price]' />
    <button type= 'submit'>add changes</button>
  </form>
</div>
)
}

export default GameEdit