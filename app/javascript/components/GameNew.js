import React from 'react' 

const GameNew = (props) => {
  const { genre } = props
  return (
    <div>
      <h1>New game form</h1>
      <form action={`/genres/${genre.id}/games`} method='post' >
        <p>name</p>
        <input name='game[name]'/>
        <p>description</p>
        <input name='game[body]'/>
        <p>price</p>
        <input name='game[price]' />
        <button type= 'submit'>add game</button>
      </form>
    </div>
  )
}

export default GameNew