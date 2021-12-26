import React from "react";
import { movies } from "../data";

function Movies() {

  const movieList = movies.map((m) => {
    return (
      <div key={m.title}>
        {m.title}
        {m.time}
        <ul>
          {m.genres.map((g) => {
            return (
            <li key={g}>{g}</li>
            )
          })}
        </ul>
      </div>
    )
  })

  return <div>
    <h1>Movies Page</h1>
    {movieList}
    </div>;
}

export default Movies;
