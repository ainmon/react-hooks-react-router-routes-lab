import React from "react";
import { actors } from "../data";

function Actors() {
  
  const actorList = actors.map((a) => {
    return(
      <div key={a.name}>
        {a.name}
        <ul>
          {a.movies.map((movie) => {
            return (
              <li key={movie}>{movie}</li>
            )
          })}
        </ul>
      </div>
    )
  })
  
  return <div>
    <h1>Actors Page</h1>
    {actorList}
    </div>;
}

export default Actors;
