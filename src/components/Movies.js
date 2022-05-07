import React from "react";
import { movies } from "../data";

function Movies() {

  const moviesToRender = movies.map((movie, index) => {

  return (
    <div key={index}>
      <ul>Title: {movie.title}</ul>
      <ul>Runtime: {movie.time}</ul>
      <ul>Genres:</ul>
      <ul>
      {movie.genres.map((genre, index) => {
        return (
            <li key={index} id={genre}>{genre}</li>
        )
      }
      )}
      </ul>
      <hr></hr>
    </div>
  )
})

return (
  <>
  <h1>
    Movies Page
  </h1>
  {moviesToRender}  
  </>
)

}

export default Movies;
