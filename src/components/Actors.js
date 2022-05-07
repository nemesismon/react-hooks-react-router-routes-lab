import React from "react";
import { actors } from "../data";

function Actors() {

  const renderActors = actors.map((actor, index) => {

    return (
      <div key={index} id={actor}>
        <ul>Actor: {actor}</ul>
        <ul>Movies:</ul>
        <ul>
          {actor.movies.map((movie, index) => {
            return (
              <li key={index} id={movie}>{movie}</li>
            )
          })}
        </ul>
        <hr></hr>
      </div>
    )
  })

return (
  <>
    <h1>Actors Page</h1>
    {renderActors}
  </>
)
}

export default Actors;
