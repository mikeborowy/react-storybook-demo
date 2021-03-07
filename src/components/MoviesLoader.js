import React from "react";
import useAbortableFetch from "use-abortable-fetch";

import MoviesList from "./MoviesList";

function MoviesLoader() {
  const url =
    "https://the-problem-solver-sample-data.azurewebsites.net/top-rated-movies";
  const { data: movies, error, loading } = useAbortableFetch(url);

  return <MoviesList movies={movies} error={error} loading={loading} />;
}

export default MoviesLoader;
