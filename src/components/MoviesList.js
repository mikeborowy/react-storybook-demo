import React from "react";
import { useHistory } from "react-router-dom";

import GridList from "@material-ui/core/GridList";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";

import MovieListItem from "./MovieListItem";

function MoviesList({ movies, loading, error }) {
  const history = useHistory();
  if (loading) {
    return <LinearProgress />;
  }

  if (error) {
    return <Typography color="error">{error.message}</Typography>;
  }

  if (!movies) {
    return null;
  }

  return (
    <GridList>
      {movies.map((movie) => (
        <MovieListItem
          key={movie.id}
          {...movie}
          onLearnMore={(id, title) => history.push(`/movie/${id}/${title}`)}
        />
      ))}
    </GridList>
  );
}

export default MoviesList;
