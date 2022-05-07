import React from "react";
import { directors } from "../data";

function Directors() {
  
  const renderDirectors = directors.map((director, index) => {

    return (
      <div key={index}>
        <ul>Director: {director.name}</ul>
        <ul>Movies:</ul>
        <ul>
          {director.movies.map((movie, index) => {
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
      <h1>Directors Page</h1>
      {renderDirectors}
    </>
    
  )

}

export default Directors;
