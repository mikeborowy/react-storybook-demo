import React from "react";
import { action } from "@storybook/addon-actions";

import MovieDetails from "./MovieDetails";
import { movieTheGodfather } from "./MovieListItem.stories";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Organisms/MovieDetails",
  component: MovieDetails,
  decorators: [(storyFn) => <MemoryRouter>{storyFn()}</MemoryRouter>],
};

export const TheGodfather = () => {
  return (
    <MovieDetails movie={movieTheGodfather} saveMovie={action("saveMovie")} />
  );
};

export const Loading = () => {
  return <MovieDetails loading />;
};

export const ErrorOnSave = () => {
  return (
    <MovieDetails
      movie={movieTheGodfather}
      saveMovie={() => {
        throw new Error("Unable to save the movie");
      }}
    />
  );
};

export const SlowSave = () => {
  return (
    <MovieDetails
      movie={movieTheGodfather}
      saveMovie={async () => {
        await new Promise((resolve) => setTimeout(resolve, 5000));
      }}
    />
  );
};
