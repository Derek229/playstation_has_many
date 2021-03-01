import React from 'react'

export default (props)  => {
    const {genres}= props
    const renderGenres = () => {
       return genres.map(genre=> {
            return (
               <div>
                  <h1>{genre.name}</h1>
                  <a href={`/genres/${genre.id}`}>view games.</a>
               </div>
            )
       })
    }
  return (
      <div>
         <h1>Genres here</h1>
         {renderGenres()}
        </div>
   )
}