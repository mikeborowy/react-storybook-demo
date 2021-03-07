import React from "react";
import useAbortableFetch from "use-abortable-fetch";
import { useParams } from "react-router-dom";

import MovieDetails from "./MovieDetails";

function MovieDetailsLoader() {
  const params = useParams();
  const url = `https://the-problem-solver-sample-data.azurewebsites.net/top-rated-movies/${params.movieId}`;
  const { data: movie, error, loading } = useAbortableFetch(url);
  const saveMovie = React.useCallback(
    async (movie) => {
      const rsp = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "put",
        body: JSON.stringify(movie),
      });
      if (rsp.ok) {
      } else {
        const error = new Error(rsp.statusText);
        error.status = rsp.status;
        throw error;
      }
    },
    [url]
  );

  return (
    <MovieDetails
      movie={movie}
      error={error}
      loading={loading}
      saveMovie={saveMovie}
    />
  );
}

export default MovieDetailsLoader;
