import React from "react";
import { directors } from "../data";

function Directors() {
 
  const directorList = directors.map((d) => {
    return (
      <div key={d.name}>
        {d.name}
        <ul>
          {d.movies.map((movie) => {
            return (
              <li key={movie}>{movie}</li>
            )
          })}
        </ul>
      </div>
    )
  })
 
 
  return <div>
    <h1>Directors Page</h1>
    {directorList}
    </div>;
}

export default Directors;
